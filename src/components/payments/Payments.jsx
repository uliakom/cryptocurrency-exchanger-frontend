import { SiVisa, SiPaypal } from 'react-icons/si';
import { Wrap, Frame, Icon, Blue } from './Payments.styled';
import { ReactComponent as Maestro } from 'images/maestro.svg';
import { ReactComponent as Webmoney } from 'images/webmoney.svg';

const Payments = () => {
  return (
    <Wrap>
      <Frame>
        <Icon as={SiVisa} />
        <Icon as={Maestro} />
        <Icon as={SiPaypal} />
        <Icon as={Webmoney} />
      </Frame>
      <Blue />
    </Wrap>
  );
};

export default Payments;
