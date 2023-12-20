import { Link } from '../nav.styled';
import { UserWrapper, Button, Text } from './userNav.styled';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

const UserNav = ({ closeMobileMenu }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleMenu = () => {
    closeMobileMenu && closeMobileMenu();
  };
  const handleLogOut = () => {
    dispatch(logOut());
    closeMobileMenu && closeMobileMenu();
  };

  return (
    <UserWrapper>
      <Link to="/user/private" onClick={handleMenu}>
        <span>{t('nav.profile')}</span>
      </Link>
      <Button type="button" onClick={handleLogOut}>
        <Text>{t('button.exit')}</Text>
      </Button>
    </UserWrapper>
  );
};

export default UserNav;
