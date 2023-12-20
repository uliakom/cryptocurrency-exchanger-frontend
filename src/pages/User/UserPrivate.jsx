import { useAuth } from 'hooks';
import FormUser from 'components/formUser';
import { Content } from './user.styled';
const UserPrivate = () => {
  const { user } = useAuth();

  return (
    <Content>
      <FormUser user={user} />
    </Content>
  );
};
export default UserPrivate;
