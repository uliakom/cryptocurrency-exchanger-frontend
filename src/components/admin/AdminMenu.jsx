import { Typography } from '@mui/material';
import Loader from 'components/loader';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Outlet } from 'react-router-dom';
import { AdminWrap, LinksWrap } from './AdminMenu.styled';

export const AdminMenu = () => {
  const { t } = useTranslation();
  return (
    <AdminWrap sx={{ display: 'flex', mt: 5, mb: 14 }}>
      <LinksWrap>
        <Link to="/admin">
          <Typography>{t('admin.account')}</Typography>
        </Link>
        <Link to="/admin/reviews">
          <Typography>{t('admin.reviews')}</Typography>
        </Link>
        <Link to="/admin/transactions">
          <Typography>{t('admin.transactions')}</Typography>
        </Link>
        <Link to="/admin/chat">
          <Typography>{t('admin.chat')}</Typography>
        </Link>
      </LinksWrap>

      <div style={{ width: '100%' }}>
        <Suspense fallback={<Loader />} style={{ width: '100%' }}>
          <Outlet />
        </Suspense>
      </div>
    </AdminWrap>
  );
};
