import './GameCard.css';

export default function GameCard(props) {

  const { title, description, url, published, image } = props;

  return (
    <div className='GameCard'>
      <img src={image} alt='Cover Image' />
      <div className='game-info'>
        <header>
          <h1>{title}</h1>
          <h4>Published: {new Date(published).toLocaleDateString('en-CA')}</h4>
        </header>
        <p>{description}</p>
        <footer>
          <button href={url} target='_blank'>Visit</button>
        </footer>
      </div>
    </div>
  );
}