import React, { useState } from 'react';

const App = () => {
  // State to store the input value
  const [inputValue, setInputValue] = useState('');

  // Handle button click
  const handleButtonClick = () => {
    alert('Button was clicked!');
  };

  // Handle input change
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value); // Update state with new input value
    console.log(value); // Log value to the console
  };

  return (
    <div>
      {/* Button element */}
      <button onClick={handleButtonClick}>Click Me</button>

      {/* Input field */}
      <input
        type='text'
        value={inputValue}
        onChange={handleInputChange}
        placeholder='Type something...'
      />
    </div>
  );
};

export default App;
