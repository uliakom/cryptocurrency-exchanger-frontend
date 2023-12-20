import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn, selectUser } from 'redux/auth/authSelectors';

const AdminRoute = ({ children, path = '/user/private' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  if (!isLoggedIn) return <Navigate to="/login" />;
  if (isLoggedIn && user.role !== 'admin') return <Navigate to={path} />;

  return children;
};

export default AdminRoute;
