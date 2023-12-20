import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import mediaBp from 'styles/breakpoints';
import { ReactComponent as Line } from 'images/nav/line.svg';

export const NavLinkWrapper = styled.div`
  align-items: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  ${mediaBp('desktop')} {
    flex-direction: row;
    color: ${({ footer, theme }) => (footer === 'true' ? '#fff' : theme.colors.primary)};
  }
`;

export const Link = styled(NavLink)`
  width: fit-content;
  font-size: 16px;
  letter-spacing: 0;
  white-space: nowrap;
  cursor: pointer;
  &.active {
    text-decoration: underline;
  }
  ${mediaBp('desktop')} {
    padding-right: 15px;
    &:last-child {
      padding-right: 0;
    }
  }
`;

export const LineImg = styled(Line)`
  display: none;
  height: 40px;
  stroke: ${({ footer, theme }) => (footer === 'true' ? '#fff' : theme.colors.line)};
  ${mediaBp('desktop')} {
    display: block;
  }
  padding-right: 15px;
`;
