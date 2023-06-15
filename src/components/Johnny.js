import './Johnny.css';
import useMousePosition from "../hooks/useMousePosition";

import johnnyIdle from '../assets/JohnnyIdle.gif';

export default function Johnny() {
  return (
    <img className='Johnny' src={johnnyIdle} />
  );
}