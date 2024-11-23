import React, { useState } from 'react';
import './Calculator.css'

const Calculator = () => {
  const [input, setInput] = useState(''); 

 
  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

 
  const handleClear = () => {
    setInput('');
  };


  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString()); 
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className='cal'>
    <div className="calculator-container">
     
      <div className="calculator-box">
        <div className="display">
          <input type="text" value={input} readOnly />
        </div>
        <div className="buttons">
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('+')}>+</button>

          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('-')}>-</button>

          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('*')}>*</button>

          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button onClick={handleClear}>C</button>
          <button onClick={() => handleClick('/')}>/</button>

          <button onClick={handleEvaluate} className="equals">
            =
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Calculator;
