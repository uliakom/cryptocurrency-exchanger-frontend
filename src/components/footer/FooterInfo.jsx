import {
  Text,
  TextWrapper,
  InfoList,
  InfoItem,
  InfoText,
  SocialList,
  SocialItem,
} from './FooterNav.styled';

import { useTranslation } from 'react-i18next';

import instagram from 'images/footer/instagram.svg';
import telegram from 'images/footer/telegram.svg';
import twitter from 'images/footer/twitter.svg';
import facebook from 'images/footer/facebook.svg';
import Line from 'images/nav/line.svg';
import { LineImg } from 'components/navigation/nav.styled';

export const FooterInfo = () => {
  const { t } = useTranslation();
  return (
    <>
      <TextWrapper>
        <Text>{t('footer.workingHours')}</Text>
        <InfoList>
          <InfoItem>
            <InfoText>{t('footer.serviceWork')}</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoText>{t('footer.tecnicalSupport')}</InfoText>
          </InfoItem>
        </InfoList>
      </TextWrapper>
      <LineImg src={Line} footer={'true'} />
      <TextWrapper>
        <Text>{t('footer.socialNetworks')}</Text>
        <SocialList>
          <SocialItem>
            <img src={instagram} alt="instagram" width="30" height="30" />
          </SocialItem>
          <SocialItem>
            <img src={telegram} alt="telegram" />
          </SocialItem>
          <SocialItem>
            <img src={facebook} alt="facebook" />
          </SocialItem>
          <SocialItem>
            <img src={twitter} alt="twitter" />
          </SocialItem>
        </SocialList>
      </TextWrapper>
    </>
  );
};
