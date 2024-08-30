import React, { useState } from "react";
const ToggleButton = ({ onToggle }) => {
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled((prevState) => !prevState);
    onToggle(!isToggled);
  };
  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: isToggled ? "#28a745" : "#dc3545",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    outline: "none",
    transition: "background-color 0.3s ease",
  };
  return (
    <button onClick={handleToggle} style={buttonStyle}>
      Click Me
    </button>
  );
};
export default ToggleButton;
