import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import './layouts/i18n/i18next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { refresh } from 'redux/auth/operations';
import { GlobalStyle } from 'styles/global.styles';

import { PrivateRoute, PublicRoute, AdminRoute } from './components/routes';
import Loader from './components/loader';
import { AdminMenu } from 'components/admin/AdminMenu';
import authSelectors from 'redux/auth/authSelectors';
import { useThemeSwitcher } from 'styles/theme';

const SharedLayout = lazy(() => import('./layouts/SharedLayout'));
const HomePage = lazy(() => import('./pages/Home'));
const ReviewsPage = lazy(() => import('./pages/Reviews'));
const AdminReviewPage = lazy(() => import('./pages/Admin/ReviewPage'));
const AdminTransactionPage = lazy(() => import('./pages/Admin/TransactionPage'));
const AdminChatPage = lazy(() => import('./pages/Admin/ChatPage'));
const AdminAccountPage = lazy(() => import('./pages/Admin/AdminAccountPage'));
const RegistrationPage = lazy(() => import('./pages/Registration'));
const LoginPage = lazy(() => import('./pages/Login'));
const UserPage = lazy(() => import('./pages/User'));
const UserAccountPage = lazy(() => import('./pages/User/UserPrivate'));
const UserReviewPage = lazy(() => import('./pages/User/UserReview'));
const UserTransactionPage = lazy(() => import('./pages/User/UserTransaction'));
const ExchangePage = lazy(() => import('./pages/Exchange'));
const NewsPage = lazy(() => import('./pages/News'));
const TradepairsPage = lazy(() => import('./pages/Tradepairs'));
const PartnershipPage = lazy(() => import('./pages/Partnership'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Faq = lazy(() => import('./pages/Faq'));

const App = () => {
  const dispatch = useDispatch();
  const userToken = useSelector(authSelectors.getUserToken);

  const { theme, toggleTheme } = useThemeSwitcher();

  useEffect(() => {
    if (userToken) dispatch(refresh());
  }, [dispatch, userToken]);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="">
        <GlobalStyle theme={theme} />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<SharedLayout theme={theme} toggleTheme={toggleTheme} />}>
              <Route index element={<HomePage />} />
              <Route
                path="login"
                element={
                  <PublicRoute restricted>
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route
                path="register"
                element={
                  <PublicRoute restricted>
                    <RegistrationPage />
                  </PublicRoute>
                }
              />
              <Route
                path="user"
                element={
                  <PrivateRoute>
                    <UserPage />
                  </PrivateRoute>
                }
              >
                <Route extend path="private" element={<UserAccountPage />} />
                <Route path="reviews" element={<UserReviewPage />} />
                <Route path="transactions" element={<UserTransactionPage />} />
              </Route>
              <Route
                path="admin"
                element={
                  <AdminRoute>
                    <AdminMenu />
                  </AdminRoute>
                }
              >
                <Route index element={<AdminAccountPage />} />
                <Route path="reviews" element={<AdminReviewPage />} />
                <Route path="transactions" element={<AdminTransactionPage />} />
                <Route path="chat" element={<AdminChatPage />} />
              </Route>
              <Route
                path="exchange"
                element={
                  <PrivateRoute>
                    <ExchangePage />
                  </PrivateRoute>
                }
              />
              <Route path="tradepairs" element={<TradepairsPage />} />
              <Route path="news" element={<NewsPage />} />
              <Route path="partnership" element={<PartnershipPage />} />
              <Route path="reviews" element={<ReviewsPage />} />
              <Route path="faq" element={<Faq />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer />
    </ThemeProvider>
  );
};

export default App;
