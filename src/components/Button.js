import './Button.css';

export default function Button(props) {

  return (

    <a
      className="Button nes-btn is-primary is-dark"
      href={props.url}
      target="_blank"
      rel="noreferrer"
    >
      {props.label}
    </a>

  );
}