import styled from '@emotion/styled';
import { Checkbox } from '@mui/material';

export const FormContainer = styled.div``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const AcceptTermsLabel = styled.label`
  display: flex;
  align-items: center;
`;

export const ExchangeCheckbox = styled(Checkbox)`
  color: ${({ theme }) => theme.colors.primary};
  margin-right: 5px;
`;

export const SubmitButton = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
