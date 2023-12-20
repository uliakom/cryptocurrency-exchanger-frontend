import styled from '@emotion/styled';
import mediaBp from 'styles/breakpoints';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${mediaBp('tablet')} {
    margin-right: -105px;
    margin-bottom: -45px;
    flex-wrap: wrap;
    flex-direction: row;
  }
  ${mediaBp('desktop')} {
    margin-right: -105px;
    margin-bottom: -45px;
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

export const Item = styled.li`
  margin-bottom: 105px;
  ${mediaBp('tablet')} {
    flex-basis: (calc(100% - 2 * 105px) / 2);
    &:nth-child(2n + 1) {
      margin-right: 105px;
    }
  }
  ${mediaBp('desktop')} {
    flex-basis: (calc(100% - 2 * 105px) / 2);
    &:nth-child(2n + 1) {
      margin-right: 105px;
    }
  }
`;
