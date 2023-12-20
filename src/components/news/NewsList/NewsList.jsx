import { useSelector } from 'react-redux';
import AdminForm from '../AdminForm/AdminForm';
import NewsItem from '../NewsItem';
import { List, Item, Container } from './NewsList.styled';
import { selectUser } from 'redux/auth/authSelectors';

const NewsList = ({ data }) => {
  const user = useSelector(selectUser);
  return (
    <Container>
      <List>
        {data?.map(item => (
          <Item key={item._id}>
            <NewsItem data={item} />
          </Item>
        ))}
      </List>
      {user.role === 'admin' && <AdminForm />}
    </Container>
  );
};

export default NewsList;
