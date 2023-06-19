import './FeaturedGame.css';
import Zoom from 'react-reveal/Zoom';

export default function FeaturedGame() {

  console.log("Boo!");

  return (
    <div className='FeaturedGame nes-container is-dark with-title'>
      <h1 className="title feature-title">Kova Invaders</h1>
      <Zoom bottom>
          <p>This game was built as a quick side project. The goal of the project was to create a simple, minimalist homage to Space Invaders that would fit a vertical screen orientation. It was completed in about two days.</p>
          <iframe src="http://games.kovakreative.com/feature/index.html" width="700" height="1080" allowFullScreen></iframe>
      </Zoom>
    </div>
  );
}