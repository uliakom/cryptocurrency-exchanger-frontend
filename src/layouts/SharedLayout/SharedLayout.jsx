import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'layouts/Header/Header';
import Footer from 'layouts/Footer/Footer';
import ChatButtons from 'components/chat/ChatButtons';
import Loader from 'components/loader';

const SharedLayout = ({ theme, toggleTheme }) => (
  <>
    <Header theme={theme} toggleTheme={toggleTheme} />
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
    <ChatButtons />
    <Footer />
  </>
);

export default SharedLayout;
