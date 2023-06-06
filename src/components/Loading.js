import logo from '../images/LoadWheel.png';
import './Loading.css';

export default function Loading() {
  return (
    <div className="Loading">
      <img src={logo} className="wheel" />
    </div>
  );
}