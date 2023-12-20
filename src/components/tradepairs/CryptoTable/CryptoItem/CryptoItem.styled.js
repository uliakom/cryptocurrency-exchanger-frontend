import styled from '@emotion/styled';
import mediaBp from 'styles/breakpoints';

export const Wrapper = styled.div`
  height: 100%;
  color: ${({ theme }) => theme.colors.primary};
  ${mediaBp('tablet')} {
    padding: 0 20px;
  }
  ${mediaBp('desktop')} {
    padding: 0 20px;
  }
`;

export const ListTitle = styled.ul`
  display: flex;
  padding-left: calc(25% - 38px);
  padding-right: calc(25% + 38px);
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.primary};
  border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
  margin-bottom: 30px;
  ${mediaBp('tablet')} {
    padding-left: calc(20% - 38px);
    padding-right: calc(20% + 38px);
  }
  ${mediaBp('desktop')} {
    padding-left: 7%;
    padding-right: 0;
    justify-content: normal;
  }
`;

export const ListTitleItem = styled.li`
  padding-bottom: 30px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  ${mediaBp('tablet')} {
    padding-bottom: 30px;
    font-size: 16px;
  }
  ${mediaBp('desktop')} {
    padding-bottom: 30px;
    width: 22%;
    font-size: 18px;
  }
`;

export const List = styled.ul`
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  width: 100%;
  list-style: none;
  counter-reset: item;
  transform: translateX(10px);
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
  :nth-of-type(odd) {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    box-shadow: 1px 1px 21px 2px rgba(17, 17, 17, 0.5) inset;
    -webkit-box-shadow: 1px 1px 21px 2px rgba(11, 11, 11, 0.5) inset;
    -moz-box-shadow: 1px 1px 21px 2px rgba(29, 19, 19, 0.5) inset;
  }
  ::before {
    content: counter(item) '. ';
    counter-increment: item;
    font-weight: bold;
    font-size: 10px;
  }
  p {
    font-family: Roboto;
    font-size: 12px;
    font-style: bold;
    font-weight: 700;
    line-height: 100%; /* 16px */
    color: ${({ theme }) => theme.colors.primary};
  }
  ${mediaBp('tablet')} {
    padding: 15px;
    ::before {
      font-size: initial;
      margin-right: 15px;
    }
    p {
      font-size: 18px;
    }
  }
  ${mediaBp('desktop')} {
    justify-content: space-around;
    padding: 15px;
    ::before {
      font-size: initial;
      margin-right: 15px;
    }
    p {
      width: 20%;
      font-size: 18px;
    }
  }
`;

export const Table = styled.div`
  margin-bottom: 20px;
  ${mediaBp('tablet')} {
    margin-bottom: 0;
  }
  ${mediaBp('desktop')} {
    margin-bottom: 0;
  }
`;

export const Change = styled.span`
  color: ${({ p }) => (p >= 0 ? '#06f239' : '#ff0000')};
`;

export const ChangeButton = styled.button`
  color: ${({ theme }) => theme.colors.text};
  border: none;
  background-color: #3e45c3;
  display: inline-flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 24px;
  &:active {
    transform: scale(0.99);
    transition: transform 0.1s ease-in-out;
    background-color: rgba(63, 70, 195, 0.4);
  }
`;
