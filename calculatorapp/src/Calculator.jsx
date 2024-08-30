
import React, { useState } from 'react';
import './Calculator.css';
import './App.jsx'

const calculate = (expression) => {
  try {
    
    const func = new Function('return ' + expression);
    return func().toString();
  } catch {
    return 'Error';
  }
};

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleEvaluate = () => {
    setInput(calculate(input));
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly className="calculator-input" />
      <div className="calculator-buttons">
        {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '/', 'C', '='].map((char) => (
          <button
            key={char}
            onClick={char === '=' ? handleEvaluate : char === 'C' ? handleClear : () => handleButtonClick(char)}
          >
            {char}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
