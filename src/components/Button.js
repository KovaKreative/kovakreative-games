import './Button.css';

export default function Button(props) {

  return (

    <a
      className="Button"
      href={props.url}
      target="_blank"
      rel="noreferrer"
    >
      {props.label}
    </a>

  );
}