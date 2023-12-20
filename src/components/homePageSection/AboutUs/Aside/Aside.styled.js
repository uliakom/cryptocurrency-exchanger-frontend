import styled from '@emotion/styled';
import mediaBp from 'styles/breakpoints';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${mediaBp('tablet')} {
    min-width: 40vw;
  }
`;

export const Image = styled.img`
  border-right: 1px solid ${({ theme }) => theme.colors.primary};
  border-top: 1px solid ${({ theme }) => theme.colors.primary};
  width: 99.9%;
  height: 100%;
  object-fit: cover;
`;

export const Block = styled.div`
  width: 99.9%;
  flex-shrink: 0;
  height: 120px;
  background-color: #3e45c3;
  border-right: 1px solid ${({ theme }) => theme.colors.primary};
`;
