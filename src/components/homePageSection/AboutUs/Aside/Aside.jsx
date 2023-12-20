import { Wrapper, Image, Block } from './Aside.styled';
import Fon from 'images/homePage/Fon.svg';

const Aside = () => {
  return (
    <Wrapper>
      <Image src={Fon} alt="about us" />
      <Block />
    </Wrapper>
  );
};

export default Aside;
