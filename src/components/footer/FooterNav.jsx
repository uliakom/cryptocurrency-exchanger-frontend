import { NavFooter } from './FooterNav.styled';
import { LineImg } from 'components/navigation/nav.styled';
import Nav from 'components/navigation/Nav';
import Info from 'components/navigation/Info';
import { FooterInfo } from './FooterInfo';

const FooterNav = () => {
  return (
    <NavFooter>
      <Nav footer={'true'} />
      <Info footer={'true'} />
      <LineImg footer={'true'} />
      <FooterInfo />
      <LineImg footer={'true'} />
    </NavFooter>
  );
};

export default FooterNav;
