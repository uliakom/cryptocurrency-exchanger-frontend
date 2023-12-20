import React, { useEffect, useRef, useState } from 'react';
import { Button, Text, Glow, Color, Wrapper } from './button.styled';

const NeoButton = ({ disabled = false, text, children, onClick, type = 'submit' }) => {
  const buttonRef = useRef(null);
  const [isGlowing, setIsGlowing] = useState(false);

  useEffect(() => {
    const button = buttonRef.current;

    const handleMouseOver = () => {
      setIsGlowing(true);
    };

    const handleMouseOut = () => {
      setIsGlowing(false);

      const bGlow = button.querySelector('.button__glow:last-child');
      if (bGlow) {
        bGlow.remove();
      }
    };

    const handleMouseMove = e => {
      if (isGlowing) {
        button.insertAdjacentHTML(
          'beforeend',
          `
                  <span class="button__glow">
                    <span class="button__color"></span>
                  </span>
                `
        );

        const bGlow = button.querySelector('.button__glow');
        let bGlowColor = button.querySelector('.button__color');

        const bGlowSizes = Math.min(button.offsetWidth, button.offsetHeight);
        bGlow.style.width = bGlow.style.height = `${bGlowSizes}px`;

        bGlowColor.style.width = `${button.offsetWidth}px`;
        bGlowColor.style.height = `${button.offsetHeight}px`;
        const posX = e.pageX - button.getBoundingClientRect().left - window.scrollX;
        const posY = e.pageY - button.getBoundingClientRect().top - window.scrollY;

        const bGlowSize = parseInt(bGlow.style.width, 10);

        bGlow.style.left = `${posX - bGlowSize / 2}px`;
        bGlow.style.top = `${posY - bGlowSize / 2}px`;

        bGlowColor.style.transform = `
                  translate(${posX - (button.offsetWidth - bGlowSize / 2)}px, 
                  ${posY - (button.offsetHeight - bGlowSize / 2)}px)`;
      }
    };

    button.addEventListener('mouseover', handleMouseOver);
    button.addEventListener('mouseout', handleMouseOut);
    button.addEventListener('mousemove', handleMouseMove);

    return () => {
      button.removeEventListener('mouseover', handleMouseOver);
      button.removeEventListener('mouseout', handleMouseOut);
      button.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isGlowing]);

  return (
    <Wrapper className="wrapper">
      <Button className="button" ref={buttonRef} type={type} disabled={disabled} onClick={onClick}>
        <Text className="button__text"> {text} </Text>
        <Glow className="button__glow">
          <Color className="button__color"></Color>
        </Glow>
      </Button>
    </Wrapper>
  );
};
export default NeoButton;
