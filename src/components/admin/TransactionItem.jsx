import { SelectStatus } from './forms/SelectStatus';
import { useState } from 'react';

import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button } from '@mui/material';
import { getFormattedFullDate } from 'helpers/formatDate';
import { updateTransactionStatus } from 'services/fetchDB';
import {
  AccordionStyled,
  AlertStyled,
  BoxDetails,
  BoxDetailsWrap,
  TypographyData,
  TypographyStatus,
} from './adminShared.styled';
import { useTranslation } from 'react-i18next';

export const TransactionItem = ({ review, expanded, setExpanded, handleChangePanel }) => {
  const { t } = useTranslation();
  const currentStatus = review.status;
  const [newStatus, setNewStatus] = useState(currentStatus);
  const [isUpdateStatus, setIsUpdateStatus] = useState(false);
  const [error, setError] = useState(false);

  const {
    _id: id,
    status,
    owner,
    amountToExchange,
    amountToReceive,
    createdAt,
    updatedAt,
    creditCard,
    wallet,
    currencyToExchange,
    currencyToReceive,
    paymentMethod,
  } = review;

  if (owner === null) return;
  const dateOfRegistration = getFormattedFullDate(new Date(owner.createdAt));

  const handleUpdateStatus = reviewId => {
    const fetchData = async () => {
      setError(false);

      const result = await updateTransactionStatus(reviewId, newStatus);

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
            {amountToExchange}
            {currencyToExchange} - {amountToReceive}
            {currencyToReceive}
          </TypographyData>
          <TypographyStatus>
            {t('userData.status')}: {status}
          </TypographyStatus>
        </AccordionSummary>
        <AccordionDetails>
          <BoxDetailsWrap>
            <BoxDetails>
              <Box>
                <Typography>
                  {t('admin.createdAt')} {createdAt}
                </Typography>
                <Typography>
                  {t('admin.updatedAt')} {updatedAt}
                </Typography>

                <Typography>
                  {t('tableTransaction.currencyToExchange')} {currencyToExchange}
                </Typography>
                <Typography>
                  {t('tableTransaction.currencyToReceive')} {currencyToReceive}
                </Typography>

                <Typography>
                  {t('admin.paymentMethod')} {paymentMethod}
                </Typography>
                <Typography>
                  {creditCard
                    ? t('admin.creditCard')
                    : wallet
                    ? t('admin.wallet')
                    : t('admin.cash')}
                  {creditCard ? creditCard : wallet}
                </Typography>
              </Box>

              {owner.email && (
                <Box>
                  <Typography>{t('admin.owner')}</Typography>

                  <Box sx={{ marginLeft: '20px' }}>
                    <Typography>
                      {t('userData.firstName')} {owner.name}
                    </Typography>
                    <Typography>
                      {t('userData.email')} {owner.email}
                    </Typography>
                    <Typography>
                      {t('admin.role')} {owner.role}
                    </Typography>
                    <Typography>
                      {t('admin.registrationDate')} {dateOfRegistration}
                    </Typography>
                  </Box>
                </Box>
              )}
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
