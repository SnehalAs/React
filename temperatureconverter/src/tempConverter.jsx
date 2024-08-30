
import React, { useState } from 'react';

function TemperatureConverter() {
  const [temperature, setTemperature] = useState('');
  const [unit, setUnit] = useState('Celsius');
  const [convertedTemperature, setConvertedTemperature] = useState(null);

  const handleTemperatureChange = (e) => {
    setTemperature(e.target.value);
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  const convertTemperature = () => {
    let converted;
    if (unit === 'Celsius') {
      converted = (temperature * 9/5) + 32; 
    } else {
      converted = (temperature - 32) * 5/9; 
    }
    setConvertedTemperature(converted.toFixed(2));
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center' , backgroundColor: 'aqua'}}>
      <h1>Temperature Converter</h1>
      <input
        type="number"
        value={temperature}
        onChange={handleTemperatureChange}
        placeholder="Enter temperature"
        style={{ padding: '10px', width: '80%', marginBottom: '10px' }}
      />
      <select value={unit} onChange={handleUnitChange} style={{ padding: '10px', width: '85%', marginBottom: '10px' }}>
        <option value="Celsius">Celsius</option>
        <option value="Fahrenheit">Fahrenheit</option>
      </select>
      <button onClick={convertTemperature} style={{ padding: '10px', width: '85%' }}>Convert</button>
      {convertedTemperature !== null && (
        <p style={{ marginTop: '20px' }}>
          Converted Temperature: {convertedTemperature} {unit === 'Celsius' ? 'Fahrenheit' : 'Celsius'}
        </p>
      )}
    </div>
  );
}

export default TemperatureConverter;
