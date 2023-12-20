import { Content, LinkGo } from './user.styled';
import { useGetMyTransactionQuery } from 'services/transactionsApi';
import { useTranslation } from 'react-i18next';
import TransactionHistory from 'components/userTransaction';

const UserTransaction = () => {
  const { data } = useGetMyTransactionQuery();
  const { t } = useTranslation();

  if (!data) {
    return;
  }

  return (
    <Content>
      {data ? (
        <TransactionHistory />
      ) : (
        <Content>
          <LinkGo to="/exchange">{t('userData.link2')}</LinkGo>
        </Content>
      )}
    </Content>
  );
};
export default UserTransaction;
