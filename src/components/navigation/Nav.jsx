import { NavLinkWrapper, Link, LineImg } from './nav.styled';
import { useTranslation } from 'react-i18next';

const Nav = ({ footer = 'false', closeMobileMenu }) => {
  const { t } = useTranslation();
  const handleMenu = () => {
    closeMobileMenu && closeMobileMenu();
  };

  return (
    <NavLinkWrapper footer={footer}>
      <Link to="/tradepairs" onClick={handleMenu}>
        <span>{t('nav.exchangeRates')}</span>
      </Link>
      <LineImg footer={footer} />
      <Link to="/news" onClick={handleMenu}>
        <span>{t('nav.news')}</span>
      </Link>
      <LineImg footer={footer} />
    </NavLinkWrapper>
  );
};

export default Nav;
