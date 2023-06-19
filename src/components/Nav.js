import './Hero.css';

export default function Nav(props) {

  return (
    <nav className='Nav nes-container is-dark with-title' onChange={(e) => props.onChange(e.target.value)}>
      <h3 className='title'>Main Menu</h3>
      <div className='menu-box'>
        <label>
          <input type="radio" className="nes-radio is-dark" name="answer-dark" value="games" defaultChecked={true} />
          <span>Games</span>
        </label>
        <label>
          <input type="radio" className="nes-radio is-dark" name="answer-dark" value="invaders" />
          <span>Feature: Invaders</span>
        </label>
      </div>
    </nav>
  );
}