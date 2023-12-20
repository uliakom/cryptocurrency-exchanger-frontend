import { Container, TextWrap } from './News.styled';
// import news from 'components/news/newsJson';
import NewsList from 'components/news/NewsList';
import { useTranslation } from 'react-i18next';
import { useGetAllNewsQuery } from 'services/newsApi';

const News = () => {
  const { data } = useGetAllNewsQuery();
  const news = data?.news;

  const { t } = useTranslation();
  return (
    <Container>
      <TextWrap>
        <h2>{t('news.title')}</h2>
        <p>{t('news.subTitle')}</p>
      </TextWrap>
      <NewsList data={news} />
    </Container>
  );
};

export default News;
