import Exchange from 'components/exchange';
import Calculator from 'components/calculator';
import { Wrap } from './ExchangePage.styled';

const ExchangePage = () => {
  return (
    <Wrap>
      <Calculator showSubmitButton={false} />
      <Exchange />
    </Wrap>
  );
};

export default ExchangePage;
