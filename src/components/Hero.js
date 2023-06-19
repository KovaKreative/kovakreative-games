import './Hero.css';

import banner from '../assets/KovaGamesBanner.png';

import Nav from './Nav';

import { Slide } from 'react-reveal';

export default function Hero(props) {

  return (
    <section className="Hero">
      <Slide top>
        <img className="logo" src={banner} alt="KovaKreative" />
        <div className="about">
          <p className="tagline">KovaKreative is an independent solo video game designer and developer striving to make fun, visually engaging games that anyone can enjoy.</p>
          <Nav onChange={props.onNavChange} />
        </div>
      </Slide>
    </section>
  );
}