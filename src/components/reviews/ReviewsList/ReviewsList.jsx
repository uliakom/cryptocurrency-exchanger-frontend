import { List, Item } from './ReviewsList.styled';
import ReviewsItem from '../ReviewsItem/ReviewsItems';

const ReviewsList = ({ reviews }) => {
  return (
    <List>
      {reviews?.map(item => (
        <Item key={item._id}>
          <ReviewsItem data={item} />
        </Item>
      ))}
    </List>
  );
};

export default ReviewsList;
