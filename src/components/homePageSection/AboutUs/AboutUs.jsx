import Advantages from './Advantages/Advantages';
import Aside from './Aside/Aside';
import { Wrapper, AboutUsContainer, Title, SubTitle } from './AboutUs.styled';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { bp } from 'styles/breakpoints';

const AboutUs = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: bp.tablet });

  return (
    <AboutUsContainer>
      <Title>{t('about.title')}</Title>
      <SubTitle>{t('about.subTitle')}</SubTitle>
      <Wrapper>
        {!isMobile && <Aside />}
        <Advantages />
      </Wrapper>
    </AboutUsContainer>
  );
};

export default AboutUs;
