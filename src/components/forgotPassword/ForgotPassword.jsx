import { SubmitBtn } from 'components/authShared/authShared.styled';
import { BackBtn, Wrap } from './ForgotPassword.styled';
import MuiCustomInput from 'components/input/Input';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { notifyError, notifySuccess } from 'helpers/notifications';
import { resetPassword, sendForgotPassword } from 'services/forgotPassword';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = ({ onBack }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [status, setStatus] = useState('');

  const handleChange = e => {
    const value = e.target.value.trim();
    const valueLowerCase = value.toLowerCase();
    const field = e.target.name;
    switch (field) {
      case 'email':
        setEmail(valueLowerCase);
        break;
      case 'verificationCode':
        setVerificationCode(value);
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

  const handleForgotPassword = async () => {
    if (!email) {
      return notifyError(t('auth.wrongData'));
    }
    const response = await sendForgotPassword({ email });
    if (response?.response?.status === 404) {
      return notifyError(t('auth.errorNotFound'));
    }
    if (response?.status === 200) {
      setStatus(200);
      notifySuccess(t('forgotPassword.success'));
    }
  };

  const handlePasswordReset = async () => {
    const response = await resetPassword({
      email,
      verificationCode: Number(verificationCode),
      password,
    });
    if (response.status === 400) {
      notifyError(t('forgotPassword.errorPasswordUnchanged'));
    } else if (response.status === 200) {
      notifySuccess(t('forgotPassword.changedPassword'));
      navigate('/login');
    } else {
      notifyError(t('forgotPassword.unexpected'));
    }
  };

  return (
    <Wrap>
      {status !== 200 ? (
        <>
          <MuiCustomInput
            label={t('auth.mail')}
            name="email"
            type="email"
            autoComplete="current-email"
            helperText={t('forgotPassword.helper')}
            onChange={handleChange}
            required
          />
          <SubmitBtn type="button" onClick={handleForgotPassword}>
            {t('button.next')}
          </SubmitBtn>
        </>
      ) : (
        <>
          <input style={{ display: 'none' }} />
          <MuiCustomInput
            label={t('auth.verifyCode')}
            name="verificationCode"
            type="text"
            defaultValue=""
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
          <SubmitBtn type="button" onClick={handlePasswordReset}>
            {t('button.submit')}
          </SubmitBtn>
        </>
      )}
      <BackBtn onClick={onBack}>{t('forgotPassword.backToLogin')}</BackBtn>
    </Wrap>
  );
};

export default ForgotPassword;
