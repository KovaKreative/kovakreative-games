import './Button.css';

export default function Button(props) {

  console.log(props.url);

  return (

    <a
      className="Button"
      href={props.url}
      target="_blank"
    >
      Visit
    </a>

  );
}