import styled from '@emotion/styled';

export const Container = styled.div``;

export const ChatButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #3e45c3;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 3px 7px 49px 17px rgba(62, 69, 195, 0.75);
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 50;
  cursor: pointer;
  transition: all 300ms cubic-bezier(0.4, 0, 0.1, 1);
  &:hover {
    transform: scale(1.07);
    box-shadow: 3px 7px 49px 17px rgba(62, 69, 195, 0.95);
  }
`;

export const ChatPanel = styled.ul`
  width: 80px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  justify-content: center;
  position: fixed;
  bottom: 110px;
  right: 20px;
  z-index: 1;
  li {
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.8);
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      transform: scale(1.06);
    }
    button {
      border-radius: 10px;
    }
  }
`;
