import './GameCard.css';

import Button from './Button';

export default function GameCard(props) {

  const { title, description, url, published, image } = props;

  return (
    <div className='GameCard'>
      <img className='cover' src={image} alt='Cover' />
      <div className='game-info'>
        <header>
          <h1>{title}</h1>
          <h4>Published: {new Date(published).toLocaleDateString('en-CA')}</h4>
        </header>
        <p className='description'>{description}</p>
          <Button url={url} label="Play on itch.io" />
      </div>
    </div>
  );
}