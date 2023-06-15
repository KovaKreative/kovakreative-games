import './Hero.css';

import banner from '../assets/KovaGamesBanner.png';
import bkg1 from '../assets/bkg1.png';
import bkg2 from '../assets/bkg2.jpg';
import bkg3 from '../assets/bkg3.png';
import bkg4 from '../assets/bkg4.jpg';

export default function Hero() {

  const coverImages = [bkg1, bkg2, bkg3, bkg4];
  const index = Math.floor(Math.random() * coverImages.length);
  const coverImage = coverImages[index];

  return (
    <section className="Hero">
      <img className="logo" src={banner} alt="KovaKreative" />
      <p className="tagline">KovaKreative is an indepentent solo video game designer and developer striving to make fun, visually engaging games that anyone can enjoy.</p>
    </section>
  );
}