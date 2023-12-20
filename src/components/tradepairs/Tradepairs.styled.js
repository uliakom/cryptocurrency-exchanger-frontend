import styled from '@emotion/styled';
import mediaBp from 'styles/breakpoints';

export const Wrapper = styled.div`
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 64px */
  letter-spacing: 0em;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-family: Phudu;
  margin-bottom: 30px;
  ${mediaBp('tablet')} {
    font-size: 32px;
  }
  ${mediaBp('desktop')} {
    font-size: 64px;
  }
`;

export const SubTitle = styled.h3`
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 100%; /* 32px */
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: 60px;
  ${mediaBp('tablet')} {
    font-size: 26px;
  }
  ${mediaBp('desktop')} {
    font-size: 32px;
  }
`;
