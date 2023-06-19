import './Main.css';
import GamesList from "./GamesList";
import FeaturedGame from './FeaturedGame';

export default function Main(props) {


  return (
    <div className='Main'>
      {props.screen === 'games' && <GamesList />}
      {props.screen === 'invaders' && <FeaturedGame />}
    </div>
  );
}