import './display.css';

interface IProps {
    input: string;
    result: string;
  }
  
const Display = (props:IProps) => {
  return (
    <div className="display">
      <div className="input">{props.input}</div>
      <div className="result">{props.result}</div>
    </div>

  )
}

export default Display