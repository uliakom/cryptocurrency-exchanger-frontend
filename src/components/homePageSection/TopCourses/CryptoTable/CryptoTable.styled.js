import styled from '@emotion/styled';
import mediaBp from 'styles/breakpoints';

export const ListTitle = styled.ul`
  display: flex;
  justify-content: space-around;

  padding: 20px 150px 0 0;
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
  position: relative;
  display: flex;
  flex-direction: column;
  width: 95vw;
  height: 390px;
  flex-shrink: 0;
  opacity: 0.8;
  margin-bottom: 60px;
  background: ${({ theme }) => theme.colors.curses};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  ${mediaBp('tablet')} {
    height: 427px;
  }
  ${mediaBp('desktop')} {
    width: 1220px;
    height: 590px;
  }
`;

export const BackgroundImage = styled.img`
  position: absolute;
  height: 100%;
  object-fit: cover;
  filter: brightness(40%);
`;

export const Image = styled.img`
  position: absolute;
  object-fit: cover;
  top: 60px;
  ${mediaBp('desktop')} {
    left: 75px;
  }
`;
