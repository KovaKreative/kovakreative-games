import './Main.css';
import GamesList from "./GamesList";
import FeaturedGame from './FeaturedGame';

import { useState } from 'react';

export default function Main() {

  const [screen, setScreen] = useState('games');

  return (
    <div className='Main'>
      <div className='nav' onChange={(e) => {
            setScreen(e.target.value);
          }}>
        <label>
          <input type="radio" className="nes-radio is-dark" name="answer-dark" value="games" defaultChecked={true} />
          <span>Games</span>
        </label>
        <label>
          <input type="radio" className="nes-radio is-dark" name="answer-dark" value="invaders" />
          <span>Kova Invaders</span>
        </label>
      </div>

      {screen === 'games' && <GamesList />}
      {screen === 'invaders' && <FeaturedGame />}
    </div>
  );
}