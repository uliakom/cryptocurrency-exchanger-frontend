import styled from '@emotion/styled';
import mediaBp from 'styles/breakpoints';

export const Wrapper = styled.div`
  display: flex;
  ${mediaBp('tablet')} {
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;
  ${mediaBp('tablet')} {
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  flex-grow: 1;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  ${mediaBp('tablet')} {
    padding: 20px 20px;
  }
  ${mediaBp('desktop')} {
    padding: 60px 84px 20px 72px;
    border-right: none;
  }
`;

export const Title = styled.h4`
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 18px */
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  text-align: justify;
  color: ${({ theme }) => theme.colors.primary};
  ${mediaBp('tablet')} {
    max-width: 340px;
  }
  ${mediaBp('desktop')} {
    width: 312px;
  }
`;
