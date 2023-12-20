import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MuiCustomInput from 'components/input';
import { FormContainer, Form, AcceptTermsLabel, ExchangeCheckbox } from './Exchange.styled';
import { useTranslation } from 'react-i18next';
import calculatorSelectors from 'redux/calculator/calculatorSelectors';
import NeoButton from 'layouts/Button/Button';
import authSelectors from 'redux/auth/authSelectors';
import { useAddTransactionMutation } from 'services/transactionsApi';
import { notifyError, notifySuccess, notifyWarning } from 'helpers/notifications';
import { update } from 'redux/auth/operations';

const Exchange = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const calcData = useSelector(calculatorSelectors.calcData);
  const user = useSelector(authSelectors.selectUser);
  const [addTransaction] = useAddTransactionMutation();

  let fullName = `${user?.firstName} ${user?.middleName} ${user?.lastName}`;
  if (user?.firstName === null || user?.lastName === null) fullName = null;

  const defaultFormData = {
    amountToExchange: calcData?.exchange || '',
    amountToReceive: calcData?.receive.toString() || '',
    currencyToExchange: calcData?.exchangeCurr,
    currencyToReceive: calcData?.receiveCurr,
    name: fullName || '',
    paymentMethod: user?.creditCard ? 'creditCard' : 'wallet',
    creditCard: user?.creditCard || '',
    wallet: user?.wallet || '',
    additionalContact: user?.additionalContact || '',
    acceptTerms: false,
  };

  const [formData, setFormData] = useState(defaultFormData);

  const resetFormData = () => {
    setFormData(defaultFormData);
  };

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { paymentMethod, creditCard, wallet, name, additionalContact, ...dataToSend } = formData;

    const paymentDetailsToSend =
      paymentMethod === 'creditCard'
        ? { creditCard }
        : paymentMethod === 'wallet'
        ? { wallet }
        : undefined;

    const dataToSendTransaction = {
      ...dataToSend,
      paymentMethod,
      ...paymentDetailsToSend,
    };
    const dataToUpdateUser = { ...paymentDetailsToSend };
    if (!user?.additonalContact && additionalContact !== '')
      dataToUpdateUser.additionalContact = additionalContact;

    if (
      (paymentMethod !== 'cash' && dataToSendTransaction.creditCard === '') ||
      dataToSendTransaction.wallet === ''
    ) {
      return notifyWarning(t('exchange.emptyDetails'));
    }
    delete dataToSendTransaction.acceptTerms;
    const response = await addTransaction(dataToSendTransaction);
    const userHasAllNecessaryData = user?.creditCard && user?.wallet && user?.additionalContact;
    if (!userHasAllNecessaryData) dispatch(update(dataToUpdateUser));
    if (response.error) {
      notifyError(t('exchange.error'));
    } else {
      paymentMethod === 'cash'
        ? notifySuccess(t('exchange.cashSuccess'))
        : notifySuccess(t('exchange.success'));
      resetFormData();
    }
  };

  const renderNameInput = () => {
    return (
      <MuiCustomInput
        label={t('exchange.name')}
        helperText={t('exchange.nameHelp')}
        name="name"
        type="text"
        defaultValue={formData.name}
        onChange={handleChange}
        required
      />
    );
  };

  const renderCreditCardInput = () => {
    return (
      <MuiCustomInput
        label={t('exchange.creditCard')}
        helperText={t('exchange.creditCardHelp')}
        name="creditCard"
        type="text"
        defaultValue={formData.creditCard}
        onChange={handleChange}
        required
      />
    );
  };

  const renderWalletInput = () => {
    return (
      <MuiCustomInput
        label={t('exchange.wallet')}
        helperText={t('exchange.walletHelp')}
        name="wallet"
        type="text"
        defaultValue={formData.wallet}
        onChange={handleChange}
        required
      />
    );
  };

  const renderAdditionalContactInput = () => {
    return (
      <MuiCustomInput
        label={t('exchange.additionalContact')}
        helperText={t('exchange.additionalContactHelp')}
        name="additionalContact"
        type="text"
        size="small"
        defaultValue={formData.additionalContact}
        onChange={handleChange}
        margin="dense"
        required
      />
    );
  };

  const renderAcceptTermsCheckbox = () => {
    return (
      <ExchangeCheckbox
        type="checkbox"
        name="acceptTerms"
        checked={formData.acceptTerms}
        onChange={handleChange}
        required
      />
    );
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        {!fullName && renderNameInput()}
        <div>
          <label>Payment Method:</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="wallet">Wallet</option>
            <option value="creditCard">Credit Card</option>
            <option value="cash">Cash</option>
          </select>
        </div>
        {(!user?.wallet || !user?.creditCard) &&
          (formData.paymentMethod === 'creditCard'
            ? renderCreditCardInput()
            : formData.paymentMethod === 'wallet'
            ? renderWalletInput()
            : null)}
        {!user?.additionalContact && renderAdditionalContactInput()}
        <AcceptTermsLabel>
          {renderAcceptTermsCheckbox()}
          {t('exchange.agreement')}
        </AcceptTermsLabel>
        <NeoButton type="submit" text={t('button.exchange')}></NeoButton>
      </Form>
    </FormContainer>
  );
};

export default Exchange;
