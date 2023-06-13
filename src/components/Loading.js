import logo from '../images/LoadWheel.png';
import './Loading.css';

export default function Loading(props) {
  return (
    <div className="Loading">
      <img src={logo} className="wheel" alt="Loading..." />
      <p>{props.message}</p>
    </div>
  );
}