import styled from '@emotion/styled';
import mediaBp from 'styles/breakpoints';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Image = styled.img`
  object-fit: cover;
  object-position: center;
  padding-bottom: 0;
  ${mediaBp('tablet')} {
    width: 50%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Text = styled.p`
  display: flex;
  flex-direction: column;
  font-family: Roboto;
  padding: 20px 50px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 60px 0;

  font-famaly: Phudu;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 64px */
  color: ${({ theme }) => theme.colors.primary};
  ${mediaBp('desktop')} {
    font-size: 64px;
  }
`;
