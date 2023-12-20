import { useState, useEffect } from 'react';
import { createTheme } from '@mui/material';
import { themes } from 'styles/global.styles';

export const useThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState(themes.light);

  useEffect(() => {
    const themeString = localStorage.getItem('theme');
    if (themeString) {
      try {
        const themeFromLocalStorage = JSON.parse(themeString);
        setCurrentTheme(themeFromLocalStorage);
      } catch (error) {
        console.error('Error parsing theme from localStorage:', error);
      }
    }
  }, []);

  const setThemeToLocalStorage = theme => {
    localStorage.setItem('theme', JSON.stringify(theme));
  };

  const toggleTheme = () => {
    const newTheme = currentTheme.title === 'dark' ? themes.light : themes.dark;
    setCurrentTheme(newTheme);
    setThemeToLocalStorage(newTheme);
  };

  const theme = createTheme({
    ...currentTheme,
  });

  return { theme, toggleTheme };
};
