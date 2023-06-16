import './FeaturedGame.css';
import Zoom from 'react-reveal/Zoom';

export default function FeaturedGame() {
  return (
    <div className='FeaturedGame'>
      <Zoom bottom><iframe id="minigame" src="http://games.kovakreative.com/feature/index.html" width="700" height="1080" allowFullScreen></iframe></Zoom>
    </div>
  )
}