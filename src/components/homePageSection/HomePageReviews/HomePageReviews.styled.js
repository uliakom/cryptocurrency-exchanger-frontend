import styled from '@emotion/styled';
import mediaBp from 'styles/breakpoints';

export const SwiperWrapper = styled.div`
  width: 100vw;
  .swiper-pagination {
    position: relative;
    padding-top: 60px;
  }
  .swiper-container {
    padding-top: 70px;
  }
  .swiper-button-prev,
  .swiper-button-next {
    display: none;
    ${mediaBp('tablet')} {
      display: block;
      padding: 20px 100px;
    }
    ${mediaBp('desktop')} {
      display: block;
      padding: 40px 200px;
    }
  }
`;

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 120px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 64px */
  margin-bottom: 30px;
  ${mediaBp('tablet')} {
    font-size: 48px;
  }
  ${mediaBp('desktop')} {
    font-size: 64px;
  }
`;

export const SubTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-family: Roboto;
  text-align: center;
  font-size: 28px;
  font-style: normal;
  font-weight: 300;
  line-height: 100%; /* 32px */
  ${mediaBp('tablet')} {
    font-size: 48px;
  }
  ${mediaBp('desktop')} {
    width: 892px;
    font-size: 64px;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* flex-basis: (calc(100% - 2 * 105px) / 2); */
  /* margin-bottom: 105px;
  &:nth-child(2n + 1) {
    margin-right: 105px;
  }
`;
