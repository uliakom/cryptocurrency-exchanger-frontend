import { Container, Wrapper, Title, Image, Text } from './Partnership.styled';
import Aside from '../../images/partnership/Aside.svg';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { bp } from 'styles/breakpoints';

const Partnership = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: bp.tablet });

  return (
    <Container>
      <Wrapper>
        <Title>{t('partnership.title')}</Title>
        <Text>{t('partnership.text1')}</Text>
        <Text>{t('partnership.text2')}</Text>
        <Text>
          {t('partnership.discount')}: <br /> {'>'} 0 — 0.01% <br /> {'>'} 5000$ — 0.05% <br />{' '}
          {'>'} 15000$ - 0.07% <br /> {'>'} 30000$ - 0.10% <br /> {'>'} 70000$ — 0.15%
        </Text>
      </Wrapper>
      {!isMobile && <Image src={Aside} alt="partnership" />}
    </Container>
  );
};

export default Partnership;
