import { Wrapper, Title, SubTitle } from './Tradepairs.styled';
import { useTranslation } from 'react-i18next';
import CryptoTable from './CryptoTable/CryptoTable';

const Tradepairs = () => {
  const { t } = useTranslation();
  return (
    <Wrapper className="container">
      <Title>{t('tradepairs.title')}</Title>
      <SubTitle>{t('tradepairs.subTitle')}</SubTitle>
      <CryptoTable />
    </Wrapper>
  );
};

export default Tradepairs;
