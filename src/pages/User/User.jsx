import { Outlet, useNavigate } from 'react-router-dom';
import Loader from 'components/loader/Loader';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { RiHome2Line, RiMacLine, RiLockUnlockLine, RiPriceTag3Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { handleDateFormat } from '../../helpers/formatDate';
import { logOut } from 'redux/auth/operations';
import {
  Text,
  AvatarHeader,
  ProfileHeader,
  ProfileWrapper,
  Link,
  ProfileNav,
  ExitButton,
  ButtonWrapper,
  TextHeader,
  Avatar,
  Flex,
  Title,
  Box,
} from './user.styled';
import authSelectors from 'redux/auth/authSelectors';

const setAvatar = name => {
  const letters = name.toUpperCase().split('');
  return letters[0];
};
const User = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(authSelectors.selectUser);
  const { role, createdAt, name } = user;
  const letter = setAvatar(name);

  const onAvatarAdminClick = () => {
    if (role === 'admin') {
      navigate('/admin');
    } else {
      return;
    }
  };

  const handleLogOut = () => dispatch(logOut());

  return (
    <>
      <ProfileHeader>
        <TextHeader>{name}</TextHeader>
        <AvatarHeader role={role} onClick={onAvatarAdminClick}>
          {letter}
        </AvatarHeader>
      </ProfileHeader>
      <ProfileWrapper>
        <ProfileNav>
          <ButtonWrapper>
            <Link to="private">
              <RiHome2Line />
              <Text>{t(`button.private`)}</Text>
            </Link>
            <Link to="transactions">
              <RiMacLine />
              <Text>{t(`button.operation`)}</Text>
            </Link>
            <Link to="reviews">
              <RiPriceTag3Line />
              <Text>{t(`button.feedback`)}</Text>
            </Link>
          </ButtonWrapper>
          <ExitButton type="button" onClick={handleLogOut}>
            <RiLockUnlockLine />
            <Text>{t('button.exit')}</Text>
          </ExitButton>
        </ProfileNav>
        <Box>
          <Avatar role={role}>{letter}</Avatar>
          <Flex>
            <Title>{name}</Title>
            <Title>
              {t(`userData.data`)}: {handleDateFormat(createdAt)}
            </Title>
          </Flex>
          <Suspense fallback={<Loader />} style={{ width: '100%' }}>
            <Outlet />
          </Suspense>
        </Box>
      </ProfileWrapper>
    </>
  );
};

export default User;
