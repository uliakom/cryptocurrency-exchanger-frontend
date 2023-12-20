import { useTranslation } from 'react-i18next';
import {
  Wrap,
  LeftFrame,
  RightFrame,
  CompanyName,
  Description,
  Background,
  Coin,
  HeroSplitter,
  LeftWrap,
} from './hero.styled';
import Calculator from 'components/calculator';
import HomeBg from 'images/background1.svg';
import Bitcoin from 'images/bitcoin.svg';
import Payments from 'components/payments';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <Wrap>
      <HeroSplitter>
        <LeftFrame>
          <LeftWrap>
            <CompanyName>CoinCryptoHub</CompanyName>
            <Description>{t('hero.desc')}</Description>
            <Calculator />
          </LeftWrap>
        </LeftFrame>
        <RightFrame>
          <Background src={HomeBg} alt="lines background" />
          <Coin src={Bitcoin} alt="bitcoin" />
        </RightFrame>
      </HeroSplitter>
      <Payments />
    </Wrap>
  );
};

export default Hero;
