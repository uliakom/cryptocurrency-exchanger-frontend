import { useTranslation } from 'react-i18next';
import { Title, Wrapper, SubTitle } from './TopCourses.styled';
import { NavLink } from 'react-router-dom';
// import topCoursBg from 'images/homePage/topCoursBg.svg';

import Button from 'layouts/Button';
import CryptoTable from './CryptoTable/CryptoTable';

const TopCourses = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Title>{t('courses.title')}</Title>
      <SubTitle>{t('courses.desc')}</SubTitle>
      <CryptoTable />

      <NavLink to="/tradepairs">
        <Button text={t('button.showMore')} />
      </NavLink>
    </Wrapper>
  );
};

export default TopCourses;
