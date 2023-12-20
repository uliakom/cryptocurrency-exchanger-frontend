import { useMediaQuery } from 'react-responsive';
import { Container, Wrap } from './Footer.styled';
import Logo from 'components/logo/Logo';
import FooterNav from '../../components/footer/FooterNav';
import { NavWrap } from 'layouts/Header/Header.styled';
import { bp } from 'styles/breakpoints';
import { FooterInfo } from 'components/footer/FooterInfo';

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: bp.tablet });
  const isDesktop = useMediaQuery({ minWidth: bp.desktop });

  return (
    <Container>
      <Wrap>
        {isDesktop && <Logo />}
        {isMobile ? (
          <FooterInfo />
        ) : (
          <NavWrap footer={'true'}>
            <FooterNav />
          </NavWrap>
        )}
      </Wrap>
    </Container>
  );
};

export default Footer;
