import React, { useState } from 'react';
import ToggleButton from './ToggleButton';
function App() {
  const [headerText, setHeaderText] = useState('Initial Text');
  const handleToggle = (isToggled) => {
    setHeaderText(isToggled ? 'Button is Toggled On' : 'Button is Toggled Off');
  };
   return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{headerText}</h1>
      <ToggleButton onToggle={handleToggle} />
    </div>
  );
}
export default App;
