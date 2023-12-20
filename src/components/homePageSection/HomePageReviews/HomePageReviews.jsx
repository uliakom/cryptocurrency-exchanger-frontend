import { ReviewContainer, SubTitle, SwiperWrapper, Title, Item } from './HomePageReviews.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useGetApprovedReviewsQuery } from 'services/reviewsApi';
import ReviewsItem from 'components/reviews/ReviewsItem';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useMediaQuery } from 'react-responsive';
import { bp } from 'styles/breakpoints';

const HomePageReviews = () => {
  const { data } = useGetApprovedReviewsQuery();
  const reviews = data?.reviews;
  const { t } = useTranslation();

  const isMobile = useMediaQuery({ maxWidth: bp.tablet });
  const isTablet = useMediaQuery({ minWidth: bp.mobile, maxWidth: bp.desktop });

  // swiper settings
  const swiperSpaceBetween = () => {
    if (isMobile) {
      return 120;
    } else if (isTablet) {
      return 80;
    } else {
      return 40;
    }
  };
  const swiperWidth = () => window.screen.width;

  return (
    <ReviewContainer>
      <Title>{t('homeReviews.title')}</Title>
      <SubTitle>{t('homeReviews.subTitle')}</SubTitle>
      <SwiperWrapper>
        <Swiper
          className="swiper-container"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={swiperSpaceBetween()}
          slidesPerView={1}
          navigation={true}
          width={swiperWidth()}
          centeredSlides={true}
          pagination={{ clickable: true }}
        >
          {reviews?.map((item, index) => (
            <SwiperSlide key={item._id || index}>
              <Item>
                <ReviewsItem className="reviewItem" data={item} />
              </Item>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrapper>
    </ReviewContainer>
  );
};

export default HomePageReviews;
