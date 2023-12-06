import React, { useState } from 'react';
import './App.css';

export function App() {
  const buttonTitles = ['All', 'Done', 'In progress', 'Todo'];
  const [clickedButton, setClickedButton] = useState('all');
  // const [isInputFocused, setIsInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleClick = (el) => {
    setClickedButton(el);
  };

  const handleInputFocus = () => {
    // setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    // setIsInputFocused(false);
  };

  const handleClearInput = () => {
    setInputValue('');
  };

  return (
    <div className="App">
      <div className='form-box'>
        <div className='form'>
          <input
            type='text'
            placeholder='filter by description...'
            className='input-box'
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          
            <img
              src="https://icons.veryicon.com/png/128/miscellaneous/enterprise-service-function-icon/search-931.png"
              alt="search"
              className= 'search-image'
            />
          
           <img
           src="https://icons.veryicon.com/png/128/miscellaneous/wens/no-10.png"
            alt="close"
          role="button"
            className='close-image'
           onClick= {handleClearInput }
           />
          
          
          
       </div>
       <button className='addTask'>+ Add Task </button>
      </div>
      <div>
        <h3 className='filter'> Filter by status </h3>
        {buttonTitles.map((el) => (
          <button
            key={el}
            className={` btn ${
              clickedButton.toLowerCase() === el.toLowerCase() ? 'btn-clicked' : ''}`}
            onClick={() => handleClick(el)}
          >
            {el}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
