import styled from '@emotion/styled';
import AdminChat from 'components/chat/AdminChat';

const ChatPage = () => {
  return (
    <Container>
      <AdminChat />
    </Container>
  );
};

export default ChatPage;

export const Container = styled.div`
  max-width: 1300px;
`;
