import { Content, Text, LinkGo, BoxR, TextReview } from './user.styled';
import { useGetMyReviewQuery } from 'services/reviewsApi';
import { useTranslation } from 'react-i18next';

const Feedback = () => {
  const { t } = useTranslation();
  const { data } = useGetMyReviewQuery();

  if (!data) {
    return (
      <Content>
        <LinkGo to="/reviews">{t('userData.link')}</LinkGo>
      </Content>
    );
  }
  const { review } = data;
  return (
    <Content>
      <Text>{t('userData.message1')}</Text>
      <TextReview>{review}</TextReview>
      <BoxR>
        <Text>{t('userData.message2')}</Text>
        <LinkGo to="/reviews">{t('userData.link1')}</LinkGo>
      </BoxR>
    </Content>
  );
};
export default Feedback;
