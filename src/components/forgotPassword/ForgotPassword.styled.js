import styled from '@emotion/styled';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  & > * {
    margin-top: 10px;
    &:first-of-type {
      margin-top: 0;
    }
  }
`;

export const BackBtn = styled.button`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: underline;
  padding: 5px;
`;
