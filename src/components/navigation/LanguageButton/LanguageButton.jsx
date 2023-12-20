import { useState } from 'react';
import i18next from 'i18next';
import { Language, LanguageChosen, LanguageWrapper } from './language.styled';
import LanguageIcon from 'images/nav/language.svg';

const LanguageButton = () => {
  const [language, setLanguage] = useState(localStorage.getItem('i18nextLng'));

  const languages = [
    {
      code: 'en',
      country_code: 'gb',
      name: 'EN',
    },
    {
      code: 'ru',
      country_code: 'ru',
      name: 'RU',
    },
    {
      code: 'ua',
      country_code: 'ua',
      name: 'UA',
    },
  ];

  const handleLanguageChange = event => {
    const selectedLanguageCode = event.target.value;


    localStorage.setItem('i18nextLng', selectedLanguageCode);
    i18next.changeLanguage(selectedLanguageCode);

    setLanguage(selectedLanguageCode);
  };

  return (
    <LanguageWrapper>
      <Language src={LanguageIcon} alt="language" />
      <LanguageChosen value={language} onChange={handleLanguageChange} className="language-select">
        {languages.map(({ code, name }) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </LanguageChosen>
    </LanguageWrapper>
  );
};

export default LanguageButton;
