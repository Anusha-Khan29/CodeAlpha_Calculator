import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    setDisplay((prev) => prev + value);
  };

  const handleClear = () => {
    setDisplay('');
  };

  const handleEqual = () => {
    try {
      setDisplay(eval (display).toString());
    } catch {
      setDisplay('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display || '0'}</div>
      <div className="buttons">
        <button className="btn clear" onClick={handleClear}>C</button>
        <button className="btn" onClick={() => handleClick('/')}>/</button>
        <button className="btn" onClick={() => handleClick('*')}>*</button>
        <button className="btn" onClick={() => handleClick('7')}>7</button>
        <button className="btn" onClick={() => handleClick('8')}>8</button>
        <button className="btn" onClick={() => handleClick('9')}>9</button>
        <button className="btn" onClick={() => handleClick('-')}>-</button>
        <button className="btn" onClick={() => handleClick('4')}>4</button>
        <button className="btn" onClick={() => handleClick('5')}>5</button>
        <button className="btn" onClick={() => handleClick('6')}>6</button>
        <button className="btn" onClick={() => handleClick('+')}>+</button>
        <button className="btn" onClick={() => handleClick('1')}>1</button>
        <button className="btn" onClick={() => handleClick('2')}>2</button>
        <button className="btn" onClick={() => handleClick('3')}>3</button>
        <button className="btn" onClick={() => handleClick('.')}>.</button>
        <button className="btn equal" onClick={handleEqual}>=</button>
        <button className="btn zero" onClick={() => handleClick('0')}>0</button>
        
      </div>
    </div>
  );
}

export default App;
