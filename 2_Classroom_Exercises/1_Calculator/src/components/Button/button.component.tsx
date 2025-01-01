import './button.css';

interface IProps {
    text: string;
    onClick: () => void;
    className?: string;
  }

  
const Button = (props:IProps) => {
  return (
    <button className={`button ${props.className}`} onClick={props.onClick}>
    {props.text}
  </button>  )
}

export default Button