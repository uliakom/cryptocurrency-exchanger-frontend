import { SelectStatus } from './forms/SelectStatus';
import { useState } from 'react';

import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button } from '@mui/material';
import { getFormattedFullDate } from 'helpers/formatDate';
import { updateReviewStatus } from 'services/fetchDB';
import {
  AccordionStyled,
  AlertStyled,
  BoxDetails,
  BoxDetailsWrap,
  TypographyData,
  TypographyStatus,
} from './adminShared.styled';

export const ReviewItem = ({ review, expanded, setExpanded, handleChangePanel }) => {
  const currentStatus = review.status;
  const [newStatus, setNewStatus] = useState(currentStatus);
  const [isUpdateStatus, setIsUpdateStatus] = useState(false);
  const [error, setError] = useState(false);

  const { _id: id, review: reviewContent, status, owner } = review;
  if (owner === null) return;
  const dateOfRegistration = getFormattedFullDate(new Date(owner.createdAt));

  const handleUpdateStatus = reviewId => {
    const fetchData = async () => {
      setError(false);

      const result = await updateReviewStatus(reviewId, newStatus);

      if (result) {
        setIsUpdateStatus(true);
        setExpanded(false);
      } else {
        setError('Something went wrong. Reload the page and try again.');
      }
    };

    fetchData();
  };

  if (isUpdateStatus && currentStatus !== newStatus) return;

  return (
    <>
      {error && <AlertStyled severity="error">{error}</AlertStyled>}

      <AccordionStyled expanded={expanded === `${id}`} onChange={handleChangePanel(`${id}`)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <TypographyData>
            Review: {reviewContent} Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Mollitia, quam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quam?
          </TypographyData>
          <TypographyStatus>status: {status}</TypographyStatus>
        </AccordionSummary>
        <AccordionDetails>
          <BoxDetailsWrap>
            <BoxDetails>
              <Typography>
                Review: {reviewContent} Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, quam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
                quam?
              </Typography>

              <Box>
                <Typography>Owner Data</Typography>

                <Box sx={{ marginLeft: '20px' }}>
                  <Typography>Name: {owner.name}</Typography>
                  <Typography>Email: {owner.email}</Typography>
                  <Typography>Role: {owner.role}</Typography>
                  <Typography>Date of registration: {dateOfRegistration}</Typography>
                </Box>
              </Box>

              <Typography>Credentials: credentials</Typography>
            </BoxDetails>

            <SelectStatus status={newStatus} setStatus={setNewStatus} />
          </BoxDetailsWrap>

          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              type="button"
              onClick={() => handleUpdateStatus(id)}
              sx={{ width: 200 }}
              disabled={newStatus === currentStatus}
            >
              Update Status
            </Button>
          </Box>
        </AccordionDetails>
      </AccordionStyled>
    </>
  );
};
