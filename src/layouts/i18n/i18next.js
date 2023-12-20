import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import lengaugeDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18next
  .use(initReactI18next)
  .use(lengaugeDetector)
  .use(Backend)
  .init({
    whitelist: ['en', 'ru', 'ua'],
    supportedLngs: ['en', 'ru', 'ua'],
    fallbackLng: 'en',
    dubug: false,
    detection: {
      order: ['localStorage'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

if (!localStorage.getItem('i18nextLng')) {
  const browserLanguage = navigator.language;
  if (browserLanguage === 'en-US' || browserLanguage === 'en') {
    localStorage.setItem('i18nextLng', 'en');
    i18next.changeLanguage('en');
  } else if (browserLanguage === 'ru-RU' || browserLanguage === 'ru') {
    localStorage.setItem('i18nextLng', 'ru');
    i18next.changeLanguage('ru');
  } else if (browserLanguage === 'uk-UA' || browserLanguage === 'uk') {
    localStorage.setItem('i18nextLng', 'ua');
    i18next.changeLanguage('ua');
  }
}

export default i18next;
