import { Title, Text, Form } from './ReviewForm.styled';
import NeoButton from 'layouts/Button';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { useNavigate } from 'react-router-dom';
import { Rating } from '@mui/material';
import { useState } from 'react';
import { useAddReviewMutation } from 'services/reviewsApi';
import { notifySuccess, notifyWarning, notifyError } from 'helpers/notifications';
import { useTranslation } from 'react-i18next';

const ReviewForm = () => {
  const { t } = useTranslation();
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const navigate = useNavigate();
  const [addReview] = useAddReviewMutation();
  const [starValue, setStarValue] = useState(3);
  const [feedback, setFeedback] = useState('');

  const handleChange = e => {
    setFeedback(e.target.value);
  };

  const handleSubmit = async e => {
    try {
      if (!isLoggedIn) {
        notifyWarning('Щоб залишити відгук будь-ласка залогіньтеся');
        navigate('/login');
        return;
      }
      e.preventDefault();
      // const data = { review: feedback, star: starValue };
      const data = { review: feedback };
      await addReview(data);
      notifySuccess(t('reviews.success'));
      setFeedback('');
    } catch {
      notifyError('Щось пішло е так...Ваш відгук не додано');
      return;
    }
  };

  return (
    <div>
      <Title>{t('reviews.formTitle')}</Title>
      <Text>{t('reviews.formSubTitle')}</Text>
      <Form onSubmit={handleSubmit}>
        <div>
          <Rating
            name="simple-controlled"
            size="large"
            value={starValue}
            onChange={(event, newValue) => {
              setStarValue(newValue);
            }}
            sx={{ marginBottom: '40px' }}
          />
        </div>
        <div>
          <label htmlFor="review" />
          <textarea
            name="review"
            value={feedback}
            rows="4"
            cols="50"
            placeholder={t('reviews.placeholder')}
            minLength="4"
            onChange={handleChange}
            required
          />
          <NeoButton type="submit" text={t('reviews.button')}></NeoButton>
        </div>
      </Form>
    </div>
  );
};

export default ReviewForm;
