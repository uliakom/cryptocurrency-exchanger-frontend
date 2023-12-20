import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Form, Wrap, SubmitBtn } from '../authShared/authShared.styled';
import MuiCustomInput from 'components/input';
import { PasswordInput } from 'components/input/PasswordInput';
import { logIn } from 'redux/auth/operations';
import authSelectors from 'redux/auth/authSelectors';
import Verification from 'components/verification';
import { resetErrors, resetUser } from 'redux/auth/authSlice';
import ForgotPassword from 'components/forgotPassword';
import { BackBtn } from 'components/forgotPassword/ForgotPassword.styled';
import { notifyError } from 'helpers/notifications';

const Login = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();

  const errorCode = useSelector(authSelectors.selectErrorCode);
  const user = useSelector(authSelectors.selectUser);
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');

  const [showForgotPassword, setShowForgotPassword] = useState(false);

  useEffect(() => {
    if (location.pathname === '/login') {
      dispatch(resetUser());
      dispatch(resetErrors());
    }
  }, [dispatch, location]);

  const handleSubmit = async e => {
    e.preventDefault();

    if (!email || !password) {
      return notifyError(t('auth.wrongData'));
    }

    const response = await dispatch(logIn({ email, password }));
    if (response.payload.status === 401) notifyError(t('auth.errorData'));
  };

  const handleChange = e => {
    const value = e.target.value.trim();
    const valueLowerCase = value.toLowerCase();
    const field = e.target.name;
    switch (field) {
      case 'email':
        setMail(valueLowerCase);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit}>
        {showForgotPassword ? (
          <ForgotPassword onBack={() => setShowForgotPassword(false)} />
        ) : (
          <>
            <MuiCustomInput
              label={t('auth.mail')}
              name="email"
              type="email"
              autoComplete="current-email"
              defaultValue={email}
              onChange={handleChange}
              required
            />
            <PasswordInput
              label={t('auth.password')}
              name="password"
              type="password"
              autoComplete="current-password"
              defaultValue={password}
              onChange={handleChange}
              required
            />
            <BackBtn type="button" onClick={() => setShowForgotPassword(true)}>
              {t('auth.forgotPassword')}
            </BackBtn>
            <SubmitBtn type="submit">
              <span>{t('auth.login')}</span>
            </SubmitBtn>
            {(user.email || errorCode === 403) && <Verification email={email} />}
          </>
        )}
      </Form>
    </Wrap>
  );
};

export default Login;
