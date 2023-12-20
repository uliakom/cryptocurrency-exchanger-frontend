import styled from '@emotion/styled';
import Logo from 'components/logo/Logo';
import mediaBp from 'styles/breakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  bottom: 0;
  position: relative;
  width: 100%;
  height: 164px;
  background-color: #3e45c3;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  ${mediaBp('desktop')} {
    align-items: center;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding-top: 20px;
    padding-left: 0;
  }
`;

export const Wrap = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mediaBp('tablet')} {
    flex-direction: row;
    padding-left: 0;
  }
  ${mediaBp('desktop')} {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const WhiteLogo = styled(Logo)`
  fill: white;
`;
