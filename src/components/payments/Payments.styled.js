import styled from '@emotion/styled';
import mediaBp from 'styles/breakpoints';

export const Wrap = styled.div`
  ${mediaBp('tablet')} {
    display: flex;
    justify-content: space-evenly;
  }
  ${mediaBp('desktop')} {
    display: flex;
  }
`;

export const Frame = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  ${mediaBp('tablet')} {
    flex: 67%;
  }
  ${mediaBp('desktop')} {
    flex: 67%;
  }
`;

export const Icon = styled.div`
  font-size: 36px;
  width: 64px;
  ${mediaBp('desktop')} {
    font-size: 48px;
  }
`;

export const Blue = styled.div`
  display: none;
  background-color: #3e45c3;
  border-left: 2px solid ${({ theme }) => theme.colors.primary};
  ${mediaBp('tablet')} {
    display: flex;
    flex: 33%;
    height: 80px;
  }
  ${mediaBp('desktop')} {
    display: flex;
    flex: 33%;
    height: 120px;
  }
`;
