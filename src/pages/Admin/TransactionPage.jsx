import { Box, Button, Typography } from '@mui/material';
import { OperationList } from 'components/admin/OperationList';
import { SelectStatus } from 'components/admin/forms/SelectStatus';
import { useCallback, useEffect, useState } from 'react';
import { getAllTransactions } from 'services/fetchDB';
import RefreshIcon from '@mui/icons-material/Refresh';
import { SelectDate } from 'components/admin/forms/SelectDate';
import Loader from 'components/loader';

const TransactionPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [cursor, setCursor] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const [filterByStatus, setFilterByStatus] = useState('pending');
  const [filterByDate, setFilterByDate] = useState('oldest');

  const fetchData = useCallback(
    async (callback, param) => {
      setIsLoading(true);

      const params = { status: filterByStatus, ...param };
      params.newest = filterByDate === 'newest' ? 'newest' : null;

      const data = await getAllTransactions(params);

      if (data) {
        const { items, nextCursor } = data;
        callback(items);
        setCursor(nextCursor);

        setIsLoading(false);
      }
    },
    [filterByDate, filterByStatus]
  );

  useEffect(() => {
    fetchData(items => {
      setTransactions(items);
    });
  }, [filterByStatus, fetchData]);

  const handleLoadMore = () => {
    fetchData(
      items => {
        setTransactions(prevItems => [...prevItems, ...items]);
      },
      { cursor }
    );
  };

  const handleRefresh = () => {
    setIsRefreshing(true);

    fetchData(items => {
      setTransactions(items);
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

        <SelectStatus status={filterByStatus} setStatus={setFilterByStatus} isAllVariant />

        <SelectDate filter={filterByDate} setFilter={setFilterByDate} />
      </Box>

      {transactions.length !== 0 && <OperationList array={transactions} operation="transaction" />}

      {isLoading && transactions.length === 0 && <Loader />}

      {transactions.length === 0 && !isLoading && <Typography>No results</Typography>}

      {transactions.length !== 0 && cursor && (
        <Box sx={{ textAlign: 'center' }}>
          <Button variant="contained" type="button" onClick={handleLoadMore} sx={{ width: 200 }}>
            {isLoading ? 'Loading' : 'Load more'}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default TransactionPage;
