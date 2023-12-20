import { ChatContainer } from './AdminChat.styled';
import { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import { getAllUsers, chatHost } from 'services/chatApi';
import { useAuth } from 'hooks/';
import { useNavigate } from 'react-router-dom';
import ChatContacts from './ChatContacts/ChatContacts';
import ChatMessages from './ChatMessages/ChatMessages';
import Loader from 'components/loader/Loader';
import { notifyWarning } from 'helpers/notifications';

const AdminChat = () => {
  const socket = useRef();
  const { user, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState({});
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [notificationId, setNotificationId] = useState('');

  const loadData = async () => {
    setIsLoading(true);
    try {
      const data = await getAllUsers();
      if (data) {
        const { items } = data;
        setContacts(items);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      setCurrentUser(user);
    }
  }, [isLoggedIn, navigate, user]);

  useEffect(() => {
    if (currentUser) {
      loadData();
    } else {
      navigate('/login');
    }
  }, [currentUser, navigate]);

  useEffect(() => {
    if (currentUser) {
      socket.current = io(chatHost);
      socket.current.emit('add-user', currentUser.id, currentUser.role);
      socket.current.on('get-users', users => {
        setOnlineUsers(users);
      });
    } else {
      navigate('/login');
    }
  }, [currentUser, navigate]);

  const handleChatChange = chat => {
    setCurrentChat(chat);
  };

  const handleMsgNotif = id => {
    setNotificationId(id);
    notifyWarning(`У вас нові повідомлення 👀`);
  };

  return (
    <ChatContainer>
      {isLoading && <Loader />}
      <ChatContacts
        onlineUsers={onlineUsers}
        data={contacts}
        changeChat={handleChatChange}
        notificationId={notificationId}
      />
      <ChatMessages currentChat={currentChat} socket={socket} handleMsgNotif={handleMsgNotif} />
    </ChatContainer>
  );
};

export default AdminChat;
