import { Pagination, Cell, TContainer } from './userTransition.styled';
import * as React from 'react';
import { Paper, Table, TableBody, TableHead, TableRow } from '@mui/material';
import { useGetMyTransactionQuery } from 'services/transactionsApi';
import { useTranslation } from 'react-i18next';

const columns = [
  {
    id: 'amountToExchange',
    label: 'amountToExchange',
    minWidth: 160,
    format: value => value.toFixed(2),
  },
  {
    id: 'amountToReceive',
    label: 'amountToReceive',
    minWidth: 160,
    format: value => value.toFixed(2),
  },
  {
    id: 'currencyToExchange',
    label: 'currencyToExchange',
    minWidth: 160,
    align: 'center',
  },
  {
    id: 'currencyToReceive',
    label: 'currencyToReceive',
    minWidth: 160,
    align: 'center',
  },
];

const TransactionHistory = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const { data } = useGetMyTransactionQuery();
  const { t } = useTranslation();

  if (!data) {
    return;
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', backgroundColor: 'transparent' }}>
      <TContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead sx={{ backgroundColor: 'transparent' }}>
            <TableRow>
              <Cell align="center" colSpan={2} sx={{ backgroundColor: 'transparent' }}>
                {t('tableTransaction.amount')}
              </Cell>
              <Cell align="center" colSpan={3} sx={{ backgroundColor: 'transparent' }}>
                {t('tableTransaction.currency')}
              </Cell>
            </TableRow>
            <TableRow>
              <Cell>{t('tableTransaction.amountToExchange')}</Cell>
              <Cell>{t('tableTransaction.amountToReceive')}</Cell>
              <Cell>{t('tableTransaction.currencyToReceive')}</Cell>
              <Cell>{t('tableTransaction.currencyToExchange')}</Cell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <Cell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </Cell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TContainer>
      <Pagination
        rowsPerPageOptions={[5, 10, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
export default TransactionHistory;
