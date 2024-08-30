import React, { useState } from "react";
import "./App.css";

function Calculator() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [result, setResult] = useState("");
  const [description, setDescription] = useState("");

  const handleSubtract = () => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);
    const subtractionResult = num1 - num2;
    setResult(subtractionResult);

    if (subtractionResult < 0) {
      setDescription("Negative");
    } else if (subtractionResult % 2 === 0) {
      setDescription("Even");
    } else {
      setDescription("Odd");
    }
  };

  return (
    <div className="calculator">
      <h2>Subtraction Calculator</h2>
      <div>
        <input
          type="number"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
          placeholder="Enter first value"
        />
      </div>
      <div>
        <input
          type="number"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          placeholder="Enter second value"
        />
      </div>
      <button onClick={handleSubtract}>Subtract</button>
      <div className="result">
        Result: {result} ({description})
      </div>
    </div>
  );
}

export default Calculator;
