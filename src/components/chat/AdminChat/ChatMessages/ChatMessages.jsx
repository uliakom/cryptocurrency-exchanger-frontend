import {
  Container,
  CurrentUserWrap,
  UserAvatarWrap,
  UserNameWrap,
  MessageContainer,
  InputContainer,
} from './ChatMessages.styled';
import { useEffect, useState, useRef } from 'react';
import instance from 'shared/api/auth';
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from 'hooks/';
import { getCurrentTime } from 'helpers/getCurrentTime';
import { getFormattedFullDate } from 'helpers/formatDate';
import ChatInput from '../ChatInput';
import WellcomWrap from 'components/chat/AdminChat/ChatMessages/WellcomWrap';
import { sendMessageRoute, recieveMessageRoute } from 'services/chatApi';
import { notifyWarning } from 'helpers/notifications';

const ChatMessages = ({ currentChat, socket, handleMsgNotif }) => {
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [newMsgId, setNewMsgId] = useState('');
  const [disabled, setDisabled] = useState(true);
  console.log(arrivalMessage);
  // console.log(newMsgId, '- id відправника', currentChat._id, '- чат ');

  useEffect(() => {
    const handleMsgReceived = async () => {
      try {
        const response = await instance.post(recieveMessageRoute, {
          from: user.id,
          to: currentChat._id,
        });
        setMessages(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    if (currentChat) {
      handleMsgReceived();
      // setNewMsgId('');
      setDisabled(false);
    }
  }, [currentChat, user]);

  const handleSendMsg = async msg => {
    try {
      const timeSent = getCurrentTime();
      socket.current.emit('send-msg', {
        to: currentChat._id,
        from: user.id,
        name: user.name,
        msg,
        time: timeSent,
      });
      await instance.post(sendMessageRoute, {
        from: user.id,
        to: currentChat._id,
        message: msg,
      });
      const msgs = [...messages];

      msgs.push({ fromSelf: true, message: msg, time: timeSent });
      setMessages(msgs);
    } catch (err) {
      console.error('An error occurred:', err);
    }
  };

  useEffect(() => {
    if (currentChat) {
      socket.current.on('msg-recieve', data => {
        if (data.from === currentChat._id) {
          setArrivalMessage({ fromSelf: false, message: data.msg, time: data.time });
          notifyWarning(`New message from ${data.name} 👀`, { autoClose: false });
          console.log(data.from, '- id відправника', currentChat._id, '- чат ');
        } else {
          setNewMsgId(data.from);
          handleMsgNotif(newMsgId);
          notifyWarning(`New message from ${data.name} 👀`, { autoClose: false });
        }
      });
    }
  }, [currentChat, socket]);

  useEffect(() => {
    arrivalMessage && setMessages(prev => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Container>
      <CurrentUserWrap>
        <UserAvatarWrap>
          <p>{currentChat?.name.charAt(0).toUpperCase()}</p>
        </UserAvatarWrap>
        <UserNameWrap>
          <p>{currentChat ? currentChat.name : ''}</p>
        </UserNameWrap>
      </CurrentUserWrap>
      <MessageContainer>
        {currentChat ? (
          <div className="chat-messages">
            {messages?.map(message => {
              return (
                <div ref={scrollRef} key={uuidv4()}>
                  <div className={`message ${message.fromSelf ? 'sended' : 'recieved'}`}>
                    <div className="content ">
                      <p>{message.message}</p>
                      <p className="time">{getFormattedFullDate(message.time)}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <WellcomWrap />
        )}
      </MessageContainer>
      <InputContainer>
        <ChatInput handleSendMsg={handleSendMsg} disabled={disabled} />
      </InputContainer>
    </Container>
  );
};

export default ChatMessages;
