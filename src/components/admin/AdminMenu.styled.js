import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const AdminWrap = styled(Box)`
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
`;

export const LinksWrap = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding-left: 10px;
  padding-right: 10px;
`;
