import './App.css';

import Hero from './components/Hero';
import Main from './components/Main';
import Foot from './components/Foot';
import Johnny from './components/Johnny';

import { useState } from 'react';

export default function App() {

  const [screen, setScreen] = useState('games');

  return (
    <div className="App">
      <div className="scroll">
        <Hero onNavChange={setScreen} />
        <Main screen={screen} />
        <Foot />
      </div>
      <Johnny />
    </div>
  );
}