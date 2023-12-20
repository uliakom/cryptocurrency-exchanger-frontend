import styled from '@emotion/styled';
import { Accordion, Alert, Box } from '@mui/material';
import Typography from '@mui/material/Typography';

export const AlertStyled = styled(Alert)`
  margin-bottom: 3px;
`;

export const AccordionStyled = styled(Accordion)`
  width: 100%;
  margin-bottom: 1px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
`;

export const TypographyData = styled(Typography)`
  width: 90%;
  flex-shrink: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-right: 4px;
`;

export const TypographyStatus = styled(Typography)`
  color: ${({ theme }) => theme.colors.primary};
`;

export const BoxDetailsWrap = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 4px;
  gap: 4px;
`;

export const BoxDetails = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
