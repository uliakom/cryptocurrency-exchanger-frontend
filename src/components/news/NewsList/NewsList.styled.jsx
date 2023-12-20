import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  /* margin-right: -30px; */
  margin-bottom: -30px;
  @media (max-width: 768px) {
    /* margin-right: -15px; */
    margin-bottom: -15px;
  }
  @media (max-width: 575px) {
    flex-direction: column;
  }
`;

export const Item = styled.li`
  /* flex-basis: (calc(100% - 3 * 30px) / 3);
  margin-bottom: 30px; */
  /* margin-right: 30px; */
  //   &:nth-child(2n + 1) {
  //     margin-right: 30px;
  //   }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* padding: 0 30px; */
`;
