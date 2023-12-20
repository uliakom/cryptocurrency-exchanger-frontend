import AboutUs from 'components/homePageSection/AboutUs';
import TopCourses from 'components/homePageSection/TopCourses';
import HomePageReviews from 'components/homePageSection/HomePageReviews';
import Hero from 'components/hero';
import { HPWrap } from './HomePage.styled';

const HomePage = () => (
  <HPWrap className="homepage">
    <Hero />
    <TopCourses />
    <AboutUs />
    <HomePageReviews />
  </HPWrap>
);

export default HomePage;
