import { useState } from 'react';
import { ReviewItem } from './ReviewItem';
import { TransactionItem } from './TransactionItem';
import { BoxOperationListStyled } from './OperationList.styled';

export const OperationList = ({ array, operation }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChangePanel = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <BoxOperationListStyled>
      {array.map(review => (
        <div key={review._id}>
          {operation === 'review' && (
            <ReviewItem
              review={review}
              expanded={expanded}
              setExpanded={setExpanded}
              handleChangePanel={handleChangePanel}
            ></ReviewItem>
          )}
          {operation === 'transaction' && (
            <TransactionItem
              review={review}
              expanded={expanded}
              setExpanded={setExpanded}
              handleChangePanel={handleChangePanel}
            ></TransactionItem>
          )}
        </div>
      ))}
    </BoxOperationListStyled>
  );
};
