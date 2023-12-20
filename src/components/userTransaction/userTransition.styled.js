import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { TablePagination, TableContainer } from '@mui/material';
import { TableCell } from '@mui/material';
import mediaBp from 'styles/breakpoints';

export const Link = styled(NavLink)`
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    color: ${({ theme }) => theme.colors.hovers};
  }
`;
export const Pagination = styled(TablePagination)`
  div {
    padding: 0;
    margin: 0;
  }
  p {
    font-size: 12px;
  }
  &.MuiTablePagination-root {
    color: ${({ theme }) => theme.colors.primary};
  }
  svg {
    fill: ${({ theme }) => theme.colors.primary};
  }
  &.MuiTablePagination-selectLabel {
    font-size: 12px;
  }
  ${mediaBp('desktop')} {
    background-color: ${({ theme }) => theme.colors.body};
    label,
    input,
    &.MuiTablePagination-root {
      color: ${({ theme }) => theme.colors.primary};
    }
    svg {
      fill: ${({ theme }) => theme.colors.primary};
    }
    &.MuiTablePagination-selectLabel {
      font-size: 14px;
    }
  }
`;
export const Cell = styled(TableCell)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 10px;
  padding: 4px;

  ${mediaBp('tablet')} {
    font-size: 14px;
    padding: 12px;
  }
  ${mediaBp('desktop')} {
    font-size: 16px;
    padding: 18px;
  }
`;
export const TContainer = styled(TableContainer)`
  mix-width: 200px;
  ${mediaBp('mobile')} {
    max-width: 440px;
  }
  ${mediaBp('tablet')} {
    max-width: 440px;
  }
  ${mediaBp('desktop')} {
    max-width: 800px;
  }
`;
