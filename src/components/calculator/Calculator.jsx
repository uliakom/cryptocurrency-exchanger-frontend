import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Wrap, Label, Input, Form, DropdownSelect } from './calculator.styled';
import NeoButton from 'layouts/Button';
import { notifyWarning, notifyError } from 'helpers/notifications';
import { storeCalculatorData } from 'redux/calculator/storeCalculatorForm';
import calculatorSelectors from 'redux/calculator/calculatorSelectors';
import authSelectors from 'redux/auth/authSelectors';
import { getMostPopular } from 'services/API/whitebit-api';
const PERCENT = 2;
const uahRate = 37;
const eurRate = 1.07;

const Calculator = ({ showSubmitButton = true }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const calcData = useSelector(calculatorSelectors.calcData);
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  const [options, setOptions] = useState([
    { value: 'uah', label: 'uah', rate: uahRate },
    { value: 'usd', label: 'usd', rate: 1 },
    { value: 'eur', label: 'eur', rate: eurRate },
    { value: 'usdt', label: 'USDT', rate: 1 },
  ]);

  const [receive, setReceive] = useState('');
  const [calculatorFormData, setCalculatorFormData] = useState({
    exchange: calcData?.exchange || '',
    exchangeCurr: calcData?.exchangeCurr || options[0].value,
    receiveCurr: calcData?.receiveCurr || options[3].value,
  });

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const apiData = await getMostPopular();
        const apiOptions = apiData.map(item => ({
          value: item.crypto,
          label: item.crypto,
          rate: 1 / item.priceInUSDT,
        }));
        setOptions(options => [...options, ...apiOptions]);
      } catch (error) {
        console.error('Error fetching options from the API:', error);
      }
    };

    fetchOptions();
  }, []);

  const swapOptions = () => {
    const { exchangeCurr, receiveCurr } = calculatorFormData;
    setCalculatorFormData({
      ...calculatorFormData,
      exchangeCurr: receiveCurr,
      receiveCurr: exchangeCurr,
    });
  };

  const countDecimalDigits = number => {
    const numberString = number.toString();
    if (numberString.includes('.')) {
      const decimalPart = numberString.split('.')[1];
      return decimalPart.length;
    } else {
      return 0;
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    if (
      (name === 'exchangeCurr' && value === calculatorFormData.receiveCurr) ||
      (name === 'receiveCurr' && value === calculatorFormData.exchangeCurr)
    ) {
      swapOptions();
    } else {
      setCalculatorFormData({
        ...calculatorFormData,
        [name]: value,
      });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!isLoggedIn) {
      notifyWarning(t('alert.loginFirst'));
      return;
    }
    if (
      !calculatorFormData.exchange ||
      isNaN(parseFloat(calculatorFormData.exchange)) ||
      parseFloat(calculatorFormData.exchange) === 0
    ) {
      notifyError(t('calc.inputEmptyError'));
      return;
    } else if (calculatorFormData.exchangeCurr === calculatorFormData.receiveCurr) {
      notifyError(t('calc.inputSameCurrency'));
      return;
    } else {
      dispatch(storeCalculatorData({ ...calculatorFormData, receive }));
      navigate('/exchange');
    }
  };

  useEffect(() => {
    const { exchange, exchangeCurr, receiveCurr } = calculatorFormData;
    const exchangeObj = options.find(option => option.value === exchangeCurr);
    const receiveObj = options.find(option => option.value === receiveCurr);

    if (exchangeObj && receiveObj && !isNaN(parseFloat(exchange))) {
      const rate = receiveObj.rate / exchangeObj.rate;
      const result = parseFloat(exchange) * rate;
      const decimalDigits = countDecimalDigits(result);
      decimalDigits === 0 ? result.toFixed(0) : result.toFixed(decimalDigits);
      const finalResult = result * (1 - PERCENT / 100);
      setReceive(finalResult);
    }
  }, [calculatorFormData, options, receive]);

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <div>
        <Wrap>
          <Label>
            <Input
              type="text"
              name="exchange"
              value={calculatorFormData.exchange}
              onChange={handleChange}
              placeholder={t('calc.inputGive')}
            />
            <DropdownSelect
              name="exchangeCurr"
              value={calculatorFormData.exchangeCurr}
              onChange={handleChange}
            >
              {options.map(option => (
                <option key={`${option.value}_exchange`} value={option.value}>
                  {option.label}
                </option>
              ))}
            </DropdownSelect>
          </Label>
        </Wrap>
        <Wrap>
          <Label>
            <Input
              type="text"
              name="receive"
              value={receive}
              onChange={handleChange}
              placeholder={t('calc.inputReceive')}
              readOnly
            />
            <DropdownSelect
              name="receiveCurr"
              value={calculatorFormData.receiveCurr}
              onChange={handleChange}
            >
              {options.map(option => (
                <option key={`${option.value}_receive`} value={option.value}>
                  {option.label}
                </option>
              ))}
            </DropdownSelect>
          </Label>
        </Wrap>
      </div>
      {showSubmitButton && <NeoButton type="submit" text={t('button.exchange')}></NeoButton>}
    </Form>
  );
};

export default Calculator;
