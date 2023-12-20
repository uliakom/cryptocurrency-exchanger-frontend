import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { register } from 'redux/auth/operations';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { Form, Wrap, SubmitBtn } from '../authShared/authShared.styled';
import Captcha from 'components/captcha';
import MuiCustomInput from 'components/input';
import { notifyError } from 'helpers/notifications';
import authSelectors from 'redux/auth/authSelectors';
import { resetErrors, resetUser } from 'redux/auth/authSlice';
import Verification from 'components/verification';

const Registration = () => {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [verificationStatus, setVerificationStatus] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const errorCode = useSelector(authSelectors.selectErrorCode);
  const user = useSelector(authSelectors.selectUser);

  useEffect(() => {
    if (location.pathname === '/register') {
      dispatch(resetUser());
      dispatch(resetErrors());
    }
  }, [dispatch, location]);

  const handleChange = e => {
    const value = e.target.value.trim();
    const valueLowerCase = value.toLowerCase();
    const field = e.target.name;
    switch (field) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setMail(valueLowerCase);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!email || !name || !password) {
      return notifyError(t('auth.errorData'));
    }
    if (confirmPassword !== password) {
      return notifyError(t('auth.checkPassword'));
    }
    if (!verificationStatus) {
      return notifyError(t('captcha.error'));
    }
    dispatch(register({ name, email, password }));
  };

  if (errorCode === 409) {
    notifyError(t('auth.errorExists'));
    dispatch(resetErrors());
  }

  return (
    <Wrap>
      <Form onSubmit={handleSubmit}>
        <MuiCustomInput
          label={t('auth.name')}
          name="name"
          type="name"
          autoComplete="current-username"
          defaultValue={name}
          onChange={handleChange}
          required
        />
        <MuiCustomInput
          label={t('auth.mail')}
          name="email"
          type="email"
          autoComplete="current-email"
          defaultValue={email}
          onChange={handleChange}
          required
        />
        <MuiCustomInput
          label={t('auth.password')}
          name="password"
          type="password"
          defaultValue={password}
          onChange={handleChange}
          required
        />
        <MuiCustomInput
          label={t('auth.confirmPassword')}
          name="confirmPassword"
          type="password"
          defaultValue={confirmPassword}
          onChange={handleChange}
          required
        />
        <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_RECAPTCHA_CLIENT_KEY}>
          <Captcha
            verificationStatus={verificationStatus}
            setVerificationStatus={setVerificationStatus}
          />
        </GoogleReCaptchaProvider>
        <SubmitBtn type="submit">
          <span>{t('auth.register')}</span>
        </SubmitBtn>
        {(user.email || errorCode === 403) && <Verification email={email} />}
      </Form>
    </Wrap>
  );
};

export default Registration;
