import styled from '@emotion/styled';
import mediaBp from 'styles/breakpoints';

export const HeaderBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
  text-align: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  ${mediaBp('desktop')} {
    justify-content: center;
  }
`;

export const NavWrap = styled.div`
  color: #fff;
  padding-top: ${({ footer }) => (footer === 'true' ? '10px' : 0)};
  display: none;
  ${mediaBp('tablet')} {
    display: ${({ footer }) => (footer === 'true' ? 'flex' : 'none')};
    padding-top: 0;
    color: ${({ theme }) => theme.colors.primary};
  }
  ${mediaBp('desktop')} {
    margin-left: 40px;
    display: flex;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const MobileMenu = styled.div`
  color: #fff;
  text-shadow: 1px 1px 4px black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(0deg, rgba(255, 255, 0, 1) 0%, rgba(0, 0, 255, 1) 100%);
  width: max-content;
  height: max-content;
  text-align: left;
  padding: 0.5rem;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  transition: transform 0.3s ease-in-out;
  a,
  div,
  span {
    margin-top: 4px;
    margin-bottom: 4px;
  }
`;

export const MobileButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 30px;
  height: 20px;
  padding: 0;

  div {
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
