import {
  Container,
  BlueElipse,
  OrangeElipse,
  NameLetter,
  ReviewDate,
  NameWpapper,
  Name,
  ReviewWpapper,
  DateStarWpapper,
} from './ReviewsItem.styled';
import { Rating } from '@mui/material';
import purpleElipse from 'images/purpleElipse.svg';
import orangeElipse from 'images/orangeElipse.svg';

const ReviewsItem = ({ data = [] }) => {
  const handleDateFormat = dateString => {
    const date = new Date(dateString);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    const formattedDate = `${day}.${month}.${year}`;
    return formattedDate;
  };

  return (
    <Container>
      <BlueElipse src={purpleElipse} alt="avatar" />
      <OrangeElipse src={orangeElipse} alt="avatar background fill" />
      <NameLetter>{data.owner?.name.charAt(0).toUpperCase()}</NameLetter>
      <NameWpapper>
        <Name>{data.owner?.name}</Name>
      </NameWpapper>
      <ReviewWpapper>
        <p>{data.review}</p>
      </ReviewWpapper>
      <DateStarWpapper>
        <div>
          <Rating name={data.owner?.id} defaultValue={5} size="large" readOnly />
        </div>
        <div>
          <ReviewDate>{handleDateFormat(data.createdAt)}</ReviewDate>
        </div>
      </DateStarWpapper>
    </Container>
  );
};

export default ReviewsItem;
