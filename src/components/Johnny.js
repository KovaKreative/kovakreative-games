import './Johnny.css';

import useMousePosition from '../hooks/useMousePosition';

import johnnyIdle from '../assets/JohnnyIdle.gif';
import johnnyMoving from '../assets/JohnnyMoving.gif';

import { useEffect, useState } from 'react';


export default function Johnny() {

  const [moving, setMoving] = useState(false);

  const mousePosition = useMousePosition();

  const [johnny, setJohnny] = useState({ x: 0, y: 0, xScale: 1 });

  useEffect(() => {

    if (Math.abs(johnny.x - mousePosition.x + 64) > 128 || Math.abs(johnny.y - mousePosition.y + 64) > 128) {
      setMoving(true);
      const targetX = mousePosition.x - 64;
      const targetY = mousePosition.y - 64;
      setJohnny({ x: targetX, y: targetY, xScale: Math.sign(mousePosition.x - johnny.x), moving: true });
    }

  }, [johnny, mousePosition]);

  return (
    <img
      className='Johnny'
      style={
        {
          transform: `scaleX(${johnny.xScale})`,
          top: johnny.y,
          left: johnny.x
        }
      }
      onTransitionEnd={() => {
        setMoving(false);
      }}
      src={moving ? johnnyMoving : johnnyIdle}
      alt="Johnny Pompadouri" />
  );
}