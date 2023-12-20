import {
  Container,
  ChatHeader,
  ChatTitle,
  LogoImg,
  MessageContainer,
  InputWrap,
} from './UserChat.styled';
import { chatHost } from 'services/chatApi';
import { sendMessageRoute, recieveMessageRoute } from 'services/chatApi';
import instance from 'shared/api/auth';
import { getCurrentTime } from 'helpers/getCurrentTime';
import { getFormattedFullDate } from 'helpers/formatDate';
import { io } from 'socket.io-client';
import Logotype from 'images/logo.svg';
import { useAuth } from 'hooks/';
import ChatInput from '../AdminChat/ChatInput';
import WellcomWrap from 'components/chat/AdminChat/ChatMessages/WellcomWrap';
import { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

const UserChat = () => {
  const socket = useRef();
  const scrollRef = useRef();
  const { user } = useAuth();
  const [isAdminOnline, setIsAdminOnline] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // поставити id адміна за замовчуванням
  const [adminId, setAdminId] = useState('65089d5b79d9033e5f8f7e46');
  const [userId, setUserId] = useState(undefined);
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  console.log(onlineUsers);
  console.log('adminId: ', adminId, 'userId: ', userId, 'userId2: ', user.id);
  console.log(arrivalMessage);

  useEffect(() => {
    if (user) {
      socket.current = io(chatHost);
      socket.current.emit('add-user', user.id, user.role);
      socket.current.on('get-users', users => {
        setOnlineUsers(users);
      });
    }
  }, [user]);

  useEffect(() => {
    const handleMsgReceived = async () => {
      try {
        const response = await instance.post(recieveMessageRoute, {
          from: adminId,
          to: userId,
        });
        setMessages(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    if (userId) {
      handleMsgReceived();
    }
  }, [userId, adminId]);

  const handleSendMsg = async msg => {
    try {
      const timeSent = getCurrentTime();
      socket.current.emit('send-msg', {
        to: adminId,
        from: userId,
        name: user.name,
        msg,
        time: timeSent,
      });
      await instance.post(sendMessageRoute, {
        from: userId,
        to: adminId,
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
    if (socket.current) {
      socket.current.on('msg-recieve', data => {
        setArrivalMessage({ fromSelf: false, message: data.msg, time: data.time });
        console.log(arrivalMessage);
      });
    }
  }, [arrivalMessage]);

  useEffect(() => {
    arrivalMessage && setMessages(prev => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // якщо один адмін
  useEffect(() => {
    if (onlineUsers) {
      const admin = onlineUsers.find(user => user.role === 'admin');
      console.log(admin);
      if (admin) {
        setIsAdminOnline(true);
        setAdminId(admin.userId);
      }
      const currentUser = onlineUsers.find(client => client.userId === user.id);

      if (currentUser) {
        setUserId(currentUser.userId);
      } else {
        const inkognitoId = uuidv4();
        setUserId(inkognitoId);
      }
    }
  }, [onlineUsers, user.id]);

  return (
    <Container>
      <ChatHeader>
        <ChatTitle>Questions? Chat with us</ChatTitle>
        <LogoImg src={Logotype} alt="Logo" />
        {isAdminOnline ? <span>🟢</span> : <span>🔴</span>}
      </ChatHeader>
      <MessageContainer>
        {user ? (
          <div className="chat-messages">
            {messages.map(message => {
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
      <InputWrap>
        <ChatInput handleSendMsg={handleSendMsg} />
      </InputWrap>
    </Container>
  );
};

export default UserChat;
