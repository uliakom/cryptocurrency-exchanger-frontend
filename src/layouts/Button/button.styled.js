import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(63, 70, 195, 0.9);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
  width: 100%;
  &::before {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    content: '';
    backdrop-filter: blur(25px);
    box-sizing: border-box;
  }
  &:active {
    transform: scale(0.99);
    transition: transform 0.1s ease-in-out;
    background-color: rgba(63, 70, 195, 0.4);
  }
`;

export const Text = styled.p`
  padding: 24px 40px;
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
  color: rgba(255, 255, 255, 1);
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: 700;
  position: relative;
  z-index: 2;
`;

export const Glow = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  border-radius: 0 50%;
`;

export const Color = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  /* background-color: #006eff; */
  background: linear-gradient(-90deg, #ff8800, orange, #6095e6, #0a61ec, #3f46c3, #c5caee, #969ade);
`;
