import { Box, Button, Typography } from '@mui/material';
import { OperationList } from 'components/admin/OperationList';
import { SelectStatus } from 'components/admin/forms/SelectStatus';
import { useEffect, useState } from 'react';
import { getAllReviews } from 'services/fetchDB';
import RefreshIcon from '@mui/icons-material/Refresh';
import Loader from 'components/loader';

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [cursor, setCursor] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState('pending');
  const [isLoadMore, setIsLoadMore] = useState(false);

  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchData = async (params, callback) => {
    setIsLoading(true);

    const data = await getAllReviews(params);

    if (data) {
      const { items, nextCursor, hasMore } = data;
      callback(items);
      setCursor(nextCursor);

      setIsLoading(false);
      setIsLoadMore(hasMore);
    }
  };

  useEffect(() => {
    const params = { status: filter };

    fetchData(params, items => {
      setReviews(items);
    });
  }, [filter]);

  const handleLoadMore = () => {
    const params = { status: filter, cursor };

    fetchData(params, items => {
      setReviews(prevItems => [...prevItems, ...items]);
    });
  };

  const handleRefresh = () => {
    const params = { status: filter };
    setIsRefreshing(true);

    fetchData(params, items => {
      setReviews(items);
      setIsRefreshing(false);
    });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 4,
          // justifyContent: 'space-between',
          px: 4,
        }}
      >
        <Button
          variant="contained"
          type="button"
          onClick={handleRefresh}
          sx={{
            width: 200,
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Typography> Refresh{isRefreshing && 'ing..'}</Typography>

          <RefreshIcon
            sx={{
              ...(isRefreshing && {
                animation: 'spin 2s linear infinite',
              }),
            }}
          />
        </Button>

        <SelectStatus status={filter} setStatus={setFilter} isAllVariant />
      </Box>

      {reviews.length !== 0 && <OperationList array={reviews} operation="review" />}

      {isLoading && reviews.length === 0 && <Loader />}

      {reviews.length === 0 && !isLoading && <Typography>No results</Typography>}

      {reviews.length !== 0 && isLoadMore && (
        <Box sx={{ textAlign: 'center' }}>
          <Button variant="contained" type="button" onClick={handleLoadMore} sx={{ width: 200 }}>
            {isLoading ? 'Loading' : 'Load more'}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ReviewPage;
