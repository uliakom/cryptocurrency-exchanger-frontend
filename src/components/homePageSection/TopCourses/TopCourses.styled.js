import styled from '@emotion/styled';
import mediaBp from 'styles/breakpoints';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
  ${mediaBp('desktop')} {
    padding: 120px 0;
    margin: 0;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-family: Phudu;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  text-align: center;
  margin-bottom: 10px;
  ${mediaBp('desktop')} {
    font-size: 64px;
    margin-bottom: 30px;
    text-align: inherit;
  }
`;

export const SubTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 100%;
  text-align: center;
  margin-bottom: 20px;
  ${mediaBp('desktop')} {
    font-size: 32px;
    margin-bottom: 60px;
    text-align: inherit;
  }
`;
