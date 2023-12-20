import styled from '@emotion/styled';
import mediaBp from 'styles/breakpoints';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justyfy-content: space-between;
  height: 100%;
  color: ${({ theme }) => theme.colors.primary};
  ${mediaBp('desktop')} {
    padding: 0 20px;
  }
`;

export const ListTitle = styled.ul`
  position: absolute;
  top: 20px;
  width: 80%;
  display: flex;
  align-items: center;
  font-weight: 700;
  line-height: 100%;
  font-style: normal;
  font-size: 12px;
  padding-left: 30px;
  ${mediaBp('tablet')} {
    font-size: 18px;
  }
  ${mediaBp('desktop')} {
    width: 85%;
    font-size: 18px;
    padding-left: auto;
  }
`;

export const ListTitleItem = styled.li`
  margin-right: calc(30% - 20px);
  &:nth-child(2) {
    margin-right: calc(31% - 50px);
  }
  &:last-child {
    margin-right: 0;
  }
  ${mediaBp('tablet')} {
    margin-right: calc(30% - 35px);
    &:nth-child(2) {
      margin-right: calc(30% - 80px);
    }
    &:nth-child(3) {
      margin-right: calc(30% - 75px);
    }
  }
  ${mediaBp('desktop')} {
    width: 16%;
    margin: 0;
    padding-left: 5.5%;
    margin-right: 0;
    &:nth-child(2) {
      padding-left: 8%;
      margin-right: 0;
    }
    &:nth-child(3) {
      padding-left: 5%;
    }
    &:nth-child(4) {
      padding-left: 7%;
    }
  }
`;

export const List = styled.ul`
  position: absolute;
  top: 90px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: 95%;
  padding-left: 10px;
  list-style: none;
  counter-reset: item;
  font-size: 12px;
  font-family: Roboto;
  font-style: bold;
  font-weight: 700;
  line-height: 100%;
  ${mediaBp('tablet')} {
    font-size: 16px;
  }
  ${mediaBp('desktop')} {
    font-size: 18px;
    width: 100%;
    padding-left: 0;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  & > * {
    margin-right: calc(25% - 10px);
    &:last-child {
      margin-right: 0;
    }
  }
  p {
    width: 2px;
  }
  ::before {
    content: counter(item) '. ';
    counter-increment: item;
    margin-right: 15px;
    font-weight: bold;
  }
  ${mediaBp('tablet')} {
    margin: 0;
    & > * {
      margin-right: calc(25% - 25px);
      &:last-child {
        margin-right: 0;
      }
    }
  }
  ${mediaBp('desktop')} {
    padding-left: 5%;
    & > * {
      margin-right: 0;
    }
    p {
      width: 20%;
    }
  }
`;

export const Table = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  width: 100%;
`;

export const Change = styled.span`
  color: ${({ p }) => (p >= 0 ? '#06f239' : '#ff0000')};
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.text};
  border: none;
  background-color: #3e45c3;
  display: inline-flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 24px;
  &:active {
    transform: scale(0.99);
    transition: transform 0.1s ease-in-out;
    background-color: rgba(63, 70, 195, 0.4);
  }
  font-size: 12px;
  ${mediaBp('tablet')} {
    font-size: 16px;
  }
  ${mediaBp('desktop')} {
    font-size: 18px;
    padding: 12px 24px;
  }
`;
