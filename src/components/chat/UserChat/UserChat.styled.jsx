import styled from '@emotion/styled';

export const Container = styled.div`
  width: 400px;
  height: 500px;
  position: relative;
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  position: fixed;
  bottom: 110px;
  right: 20px;
  z-index: 1;
  box-shadow: 10px 10px 13px -6px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 13px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 13px -6px rgba(0, 0, 0, 0.75);
`;

export const ChatHeader = styled.div`
  width: 400px;
  // height: 50px;
  height: 10%;
  display: flex;
  align-items: center;
  background-color: #3e45c3;
  padding: 10px 20px 10px 20px;
  span {
    position: absolute;
    right: 97px;
    top: 5px;
  }
`;

export const ChatTitle = styled.p`
  margin-right: 90px;
  color: #fff;
  font-family: Actor;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
`;

export const LogoImg = styled.img`
  width: 70px;
  height: 70px;
`;

export const MessageContainer = styled.div`
  height: 75%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0.2rem;
    &-thumb {
      background-color: #a1812e;
      width: 0.1rem;
      border-radius: 1rem;
    }
  }
  .chat-messages {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .message {
      display: flex;
      align-items: center;

      .content {
        max-width: 40%;
        overflow-wrap: break-word;
        padding: 1rem;
        font-size: 1.1rem;
        border-radius: 1rem;
        color: ${({ theme }) => theme.colors.primary};
        @media screen and (min-width: 720px) and (max-width: 1080px) {
          max-width: 70%;
        }
      }
    }
    .sended {
      justify-content: flex-end;
      .content {
        background-color: #4f04ff21;
      }
    }
    .recieved {
      justify-content: flex-start;
      .content {
        background-color: #9900ff20;
      }
    }
    .time {
      font-size: 12px;
      color: gray;
    }
  }
`;

export const InputWrap = styled.div`
  height: 10%;
`;
