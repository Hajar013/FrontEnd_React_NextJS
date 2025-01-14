import { useState } from 'react'
import './App.css'
import { evaluate } from "mathjs";
import Display from './components/Display/display.component';
import Button from './components/Button/button.component';

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [calculationDone, setCalculationDone] = useState(false); 
  const BUTTON_LIST: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "=", "C"];
  const CLASS_MAP: Record<string, string> = {
    "1": "number",
    "2": "number",
    "3": "number",
    "4": "number",
    "5": "number",
    "6": "number",
    "7": "number",
    "8": "number",
    "9": "number",
    "0": "number",
    "+": "operator",
    "-": "operator",
    "=": "action",
    "C": "clear",
  };

  const handleButtonClick = (text: string) => {
    if (text === "=") {
      try {
        // Append the = text to the input
        setInput(input +" "+text);

        // Calculate the result
        const evalResult = evaluate(input);
        setResult(evalResult.toString());
setCalculationDone(true);

      } catch {
        setResult("Error");
      }
    } else if (text === "C") {
      // Clear the input and result
      setInput("");
      setResult("");
      setCalculationDone(false);

    } else {
      if (calculationDone) {
        // If a calculation was done, reset input and result before adding a new number
        setInput(text);
        setResult("");
        setCalculationDone(false); // Reset the calculation state
      } else {
        // Append the button text to the input
        setInput(input + text);
      }
    }
  };

  return (
    <div className="calculator">
      {/* Display Section */}
      <Display input={input} result={result} />

      {/* Button Grid */}
      <div className="button-grid">
        {
          BUTTON_LIST.map((text) => (
            <Button
              key={text}
              text={text}
              onClick={() => handleButtonClick(text)}
              className={
                CLASS_MAP[text]}
            />

          ))}
      </div>
    </div>
  )
}

export default App
