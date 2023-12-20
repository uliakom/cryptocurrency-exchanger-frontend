import { Link, LogoImg } from './logo.styled';
import Logotype from 'images/logo.svg';

const Logo = () => (
  <Link to="/">
    <LogoImg src={Logotype} alt="Logo" />
  </Link>
);

export default Logo;
