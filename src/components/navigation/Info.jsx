import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { DropdownMenu, InfoText, InfoImg, InfoBtn, LinkList, Link } from './info.styled';
import { useTranslation } from 'react-i18next';
import { bp } from 'styles/breakpoints';

const Info = ({ footer = 'false', closeMobileMenu }) => {
  const { t } = useTranslation();
  const handleMenu = () => {
    closeMobileMenu && closeMobileMenu();
    setIsOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const isDesktop = useMediaQuery({ minWidth: bp.desktop });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = event => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <DropdownMenu ref={dropdownRef} footer={footer}>
      {isDesktop && (
        <InfoBtn onClick={toggleDropdown}>
          <InfoText>{t('nav.information')}</InfoText>
          <InfoImg footer={footer} alt="dropdown"></InfoImg>
        </InfoBtn>
      )}
      {(isOpen || !isDesktop) && (
        <LinkList footer={footer}>
          <Link to="/partnership" onClick={handleMenu}>
            <span>{t('nav.partnership')}</span>
          </Link>
          <Link to="/reviews" onClick={handleMenu}>
            <span>{t('nav.reviews')}</span>
          </Link>
          <Link to="/faq" onClick={handleMenu}>
            <span>FAQ</span>
          </Link>
        </LinkList>
      )}
    </DropdownMenu>
  );
};

export default Info;
