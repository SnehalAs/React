import React, { useState } from 'react';
import './App.css';

function MultiplierApp() {
  
  const [multiplier, setMultiplier] = useState(1);

 
  const handleClick = () => {
    setMultiplier((prevMultiplier) => prevMultiplier + 1);
  };

  const result = 5 * multiplier;

  return (
    <div className="App">
      <h1>MULTIPLIER APP</h1>
      <p>{`5 * ${multiplier} = ${result}`}</p>
      <button onClick={handleClick} className="multiply-button">
        Multiply by 5
      </button>
    </div>
  );
}

export default MultiplierApp;
