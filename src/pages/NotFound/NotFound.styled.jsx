import styled from '@emotion/styled';
import Bg404 from 'images/Bg404.svg';

export const Overlap = styled.div`
  background-image: url('${Bg404}');
  background-size: cover;
  height: 60vw;
  position: relative;
  width: 100%;
`;

export const EllipseColor = styled.div`
  background-color: #e8a75e80;
  border-radius: 40vw/30vw;
  filter: blur(250px);
  height: 50%;
  left: 30%;
  position: absolute;
  top: 12%;
  width: 55%;
`;

export const Coin = styled.img`
  position: absolute;
  left: 38%;
  top: 65%;
  height: 45%;
`;

export const TextWrapper = styled.div`
  color: #ffffff;
  font-family: 'Actor-Regular', Helvetica;
  font-size: 15vw;
  font-weight: 400;
  left: 12%;
  letter-spacing: 0;
  position: absolute;
  top: 10%;
  white-space: nowrap;
`;

export const BtnWrap = styled.div`
  min-width: 200px;
  left: 66%;
  position: absolute;
  top: 75%;
  p {
    padding: 2vw;
    font-size: 1.35vw;
  }
`;
