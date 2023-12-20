import styled from '@emotion/styled';
import mediaBp from 'styles/breakpoints';

export const Wrap = styled.div`
  color: ${({ theme }) => theme.colors.primary};
`;

export const HeroSplitter = styled.div`
  display: flex;
  flex-direction: column;
  ${mediaBp('tablet')} {
    flex-direction: row;
  }
  ${mediaBp('desktop')} {
    flex-direction: row;
  }
`;

export const LeftFrame = styled.div`
  display: flex;
  flex: 67%;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  ${mediaBp('desktop')} {
    align-items: normal;
    flex: 67%;
  }
`;

export const LeftWrap = styled.div`
  display: flex;
  flex: 67%;
  align-items: center;
  flex-direction: column;
  ${mediaBp('desktop')} {
    align-items: normal;
    padding-left: 111px;
    padding-bottom: 74px;
    padding-top: 80px;
    flex: 67%;
  }
`;

export const RightFrame = styled.div`
  display: none;
  position: relative;
  align-items: flex-end;
  flex-direction: column;
  border-left: 2px solid ${({ theme }) => theme.colors.primary};
  ${mediaBp('tablet')} {
    display: flex;
    flex: 33%;
  }
  ${mediaBp('desktop')} {
    display: flex;
    flex: 33%;
  }
`;

export const CompanyName = styled.h1`
  font-family: Phudu;
  font-size: 36px;
  font-weight: 400;
  line-height: 100%;
  margin-bottom: 10px;
  ${mediaBp('desktop')} {
    font-size: 84px;
    font-weight: 400;
    line-height: 100%;
    margin-bottom: 60px;
  }
`;

export const Description = styled.h2`
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 100%;
  max-width: 70%;
  margin-bottom: 20px;
  ${mediaBp('desktop')} {
    font-size: 36px;
    font-style: normal;
    font-weight: 300;
    line-height: 100%;
    max-width: 750px;
    margin-bottom: 60px;
  }
`;

export const Background = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Coin = styled.img`
  position: absolute;
  top: 15%;
  left: 10%;
  height: 50%;
`;
