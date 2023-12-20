import { CardWrapper } from './CryptoTable.styled';
import CryptoItem from './CryptoItem/CryptoItem';
// import { useTranslation } from 'react-i18next';

const CryptoTable = () => {
  // const { t } = useTranslation();
  const handleCryptoItemClick = item => {
    console.log('Button clicked for crypto:', item.crypto);
  };
  return (
    <CardWrapper>
      <CryptoItem onCryptoItemClick={handleCryptoItemClick} />
    </CardWrapper>
  );
};

export default CryptoTable;
