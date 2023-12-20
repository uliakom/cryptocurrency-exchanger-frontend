import { Container, List, Item, AvatarWrap } from './ChatContacts.styled';
import { useState } from 'react';

const ChatContacts = ({ data, changeChat, onlineUsers, notificationId }) => {
  const [currentSelected, setCurrentSelected] = useState(0);

  const changeCurrentChat = (index, item) => {
    setCurrentSelected(index);
    console.log(currentSelected, index);
    changeChat(item);
  };

  // console.log(onlineUsers);
  console.log(notificationId);

  const filteredUsers = data?.filter(item => item.role === 'user');

  return (
    <Container>
      <List>
        {filteredUsers?.map((item, index) => (
          <Item
            key={item._id}
            isSelected={index === currentSelected}
            onClick={() => changeCurrentChat(index, item)}
          >
            <AvatarWrap>
              <p>{item.name?.charAt(0).toUpperCase()}</p>
            </AvatarWrap>
            <div>
              <p>
                {item.name} {notificationId === item._id ? '🤚' : ''}
              </p>
            </div>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default ChatContacts;
