import styled from '@emotion/styled';
import mediaBp from 'styles/breakpoints';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
  ${mediaBp('desktop')} {
    align-items: normal;
  }
`;

export const Wrap = styled.div`
  margin-bottom: 30px;
`;

export const Label = styled.label`
  display: flex;
  justify-content: center;
  ${mediaBp('desktop')} {
    justify-content: normal;
  }
`;

export const Input = styled.input`
  color: inherit;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.body};
  text-align: right;
  width: 30%;
  padding: 12px 6px;
  margin-right: 10px;
  font-weight: 700;
  outline: none;
  ${mediaBp('desktop')} {
    width: 300px;
    padding: 22px 14px;
    margin-right: 30px;
  }
`;

export const DropdownSelect = styled.select`
  cursor: pointer;
  color: inherit;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.body};
  padding: 12px 6px;
  outline: none;
  font-family: Roboto;
  font-weight: 700;
  ${mediaBp('desktop')} {
    padding: 22px 14px;
  }
`;
