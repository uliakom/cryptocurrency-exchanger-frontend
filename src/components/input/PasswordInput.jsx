import { useState } from 'react';
import { IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Input } from './Input.styled';
import { useTranslation } from 'react-i18next';

export const PasswordInput = ({ size = 'small', onChange, margin = 'dense', required = true }) => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <Input
      label={t('auth.password')}
      name="password"
      type={showPassword ? 'text' : 'password'}
      autoComplete="on"
      size={size}
      onChange={onChange}
      margin={margin}
      required={required}
      InputProps={{
        endAdornment: (
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        ),
      }}
    ></Input>
  );
};
