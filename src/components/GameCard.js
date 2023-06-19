import './GameCard.css';

import Button from './Button';

export default function GameCard(props) {

  const { title, description, url, published, image } = props;

  return (
    <div className='GameCard nes-container is-dark with-title'>
      <h1 className='title gamecard-title'>{title}</h1>
      <div className='card'>
        <img className='cover' src={image} alt='Cover' />
        <div className='game-info'>
          <header>
            <h4>Published:</h4>
            <p>{new Date(published).toLocaleDateString('en-CA')}</p>
          </header>
          <p className='description'>{description}</p>
          <Button url={url} label="Play on itch.io" />
        </div>
      </div>
    </div>
  );
}