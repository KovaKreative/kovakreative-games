import './App.css';

import Hero from './components/Hero';
import Main from './components/Main';
import Foot from './components/Foot';
import Johnny from './components/Johnny';

export default function App() {
  return (
    <div className="App">
      <Hero />
      <Main />
      <Foot />
      <Johnny />
    </div>
  );
}