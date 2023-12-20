import styled from '@emotion/styled';
import mediaBp from 'styles/breakpoints';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 250px;
  padding: 32px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border: 2px solid #ffffff;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.02);
  }
  ${mediaBp('tablet')} {
    width: 330px;
    height: 300px;
    padding: 42px;
  }
  ${mediaBp('desktop')} {
    width: 530px;
    height: 350px;
    padding: 52px;
  }
`;

export const BlueElipse = styled.img`
  position: absolute;
  top: -50px;
  left: -30px;
  z-index: 10;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: 100px;
  ${mediaBp('tablet')} {
    width: auto;
  }
  ${mediaBp('desktop')} {
    width: auto;
  }
`;

export const OrangeElipse = styled.img`
  position: absolute;
  top: -50px;
  left: -30px;
  z-index: 15;
  width: 102px;
  height: 104px;
  border-radius: 50%;
  ${mediaBp('tablet')} {
    width: 180px;
    height: 187px;
  }
  ${mediaBp('desktop')} {
    width: 180px;
    height: 187px;
  }
`;

export const NameLetter = styled.p`
  position: absolute;
  top: -40px;
  left: 1px;
  z-index: 18;
  text-align: center;
  color: #fff;
  font-family: Roboto;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 96px;
  ${mediaBp('tablet')} {
    top: -4px;
    left: 40px;
  }
  ${mediaBp('desktop')} {
    top: -10px;
    left: 35px;
  }
`;

export const NameWpapper = styled.div`
  margin-bottom: 20px;
  ${mediaBp('tablet')} {
    margin-bottom: 30px;
  }
  ${mediaBp('desktop')} {
    margin-bottom: 40px;
  }
`;

export const Name = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px;
`;

export const ReviewWpapper = styled.div`
  height: 200px;
  width: 200px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  p {
    color: ${({ theme }) => theme.colors.primary};
    text-align: left;
    font-family: Red Hat Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
  ${mediaBp('tablet')} {
    width: 400px;
  }
  ${mediaBp('desktop')} {
    width: 400px;
  }
`;

export const DateStarWpapper = styled.div`
  width: 230px;
  display: flex;
  flex-direction: row !important;
  justify-content: space-between;
  align-items: center;
  ${mediaBp('tablet')} {
    width: 320px;
    align-items: normal;
  }
  ${mediaBp('desktop')} {
    width: 500px;
    align-items: normal;
  }
`;

export const ReviewDate = styled.p`
  color: ${({ theme }) => theme.colors.primary};
`;
