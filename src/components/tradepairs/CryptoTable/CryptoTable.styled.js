import styled from '@emotion/styled';

export const ListTitle = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 30px;
  align-items: center;
  list-style: none;
`;

export const Item = styled.li`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 16px */
  color: ${({ theme }) => theme.colors.primary};
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 30px;
  flex-shrink: 0;
  opacity: 0.8;
  margin-bottom: 60px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 0px 10px rgba(247, 174, 6, 0.25);
`;
