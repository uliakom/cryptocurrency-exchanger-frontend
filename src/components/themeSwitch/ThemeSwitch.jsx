import { useState, useEffect } from 'react';
import { ThemeSwitch } from './ThemeSwitch.styled';

const ThemeSwitcherButton = ({ theme, toggleTheme }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (theme.title === 'light') {
      setChecked(false);
    } else {
      setChecked(true);
    }
  }, [theme]);

  const handleChange = () => {
    toggleTheme();
  };

  return (
    <ThemeSwitch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'toggle theme' }}
    />
  );
};

export default ThemeSwitcherButton;
