// import { Container } from './NotFound.styled';
// import { useTranslation } from 'react-i18next';

import NeoButton from 'layouts/Button/Button';
import { useNavigate } from 'react-router-dom';
import { Overlap, EllipseColor, TextWrapper, BtnWrap } from './NotFound.styled';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const onClick = () => {
    navigate('/');
  };
  return (
    <Overlap>
      <EllipseColor />
      <TextWrapper>404</TextWrapper>
      <BtnWrap>
        <NeoButton onClick={onClick} text={t('notFound.button')} />
      </BtnWrap>
    </Overlap>
  );
};

// const NotFound = () => {
//   const { t } = useTranslation();
//   return <Container></Container>;
// };

export default NotFound;
