import ReviewsList from 'components/reviews/ReviewsList/ReviewsList';
import { Container, NoReviews, TextWrap } from './Reviews.styled';
import { useGetApprovedReviewsQuery } from 'services/reviewsApi';
import Loader from 'components/loader/Loader';
import ReviewPagination from 'components/reviews/Pagination/ReviewPagination';
import ReviewForm from 'components/reviews/ReviewForm/ReviewForm';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useTranslation } from 'react-i18next';

const ReviewsPage = () => {
  const { t } = useTranslation();
  const { pageNumber } = useSelector(state => state?.reviews);
  const { data, status } = useGetApprovedReviewsQuery(Number(pageNumber));

  return (
    <Container>
      <TextWrap>
        <h2>{t('reviews.title')}</h2>
        <p>{t('reviews.subTitle')}</p>
        {status !== 'pending' && data?.totalPages === 0 && (
          <NoReviews>{t('reviews.noReviews')}</NoReviews>
        )}
      </TextWrap>
      {status === 'pending' && <Loader />}
      {data && (
        <div>
          {data.totalPages >= 1 && <ReviewsList reviews={data.reviews} />}
          {data.totalPages > 1 && (
            <ReviewPagination total={data.totalPages} current={data.currentPage} />
          )}
          <ReviewForm />
        </div>
      )}
    </Container>
  );
};

export default ReviewsPage;
