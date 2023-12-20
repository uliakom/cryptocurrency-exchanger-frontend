import styled from '@emotion/styled';
import mediaBp from 'styles/breakpoints';

export const RegistrationWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  ${mediaBp('desktop')} {
    padding-left: 60px;
    flex-direction: row;
  }
`;
