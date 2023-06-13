import './Hero.css';

import banner from '../images/KovaGamesBanner.png';
import bkg1 from '../images/bkg1.png';
import bkg2 from '../images/bkg2.jpg';
import bkg3 from '../images/bkg3.png';
import bkg4 from '../images/bkg4.jpg';

export default function Hero() {

  const coverImages = [bkg1, bkg2, bkg3, bkg4];
  const index = Math.floor(Math.random() * coverImages.length);
  const coverImage = coverImages[index];

  return (
    <section className="Hero">
      <img
        className="hero-bg"
        src={coverImage}
        alt=""
      />
      <img className="logo" src={banner} alt="KovaKreative" />
      <p className="tagline">KovaKreative is an indepentent solo video game designer and developer striving to make fun, visually engaging games that anyone can enjoy.</p>
    </section>
  );
}