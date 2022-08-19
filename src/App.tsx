import './App.css';
import React, { useState } from 'react';

function App() {

  const [calculateStorage, setCalculateStorage] = useState({
    calculatedSum: 0,
    operand: '',
    numBeforeOperand: 0,
    numAfterOperand: 0
  });



  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    let button = e.target as HTMLButtonElement;

    if (button.name === 'operand') {
      setCalculateStorage(prevState => ({
        ...prevState, 
        operand: button.value
      }));      
    } else {
      setCalculateStorage(prevState => ({
        ...prevState, 
        numBeforeOperand: Number(button.value)
      }));
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Typescript Calculator</h1>
        <span>
          <p>{calculateStorage.numBeforeOperand}</p>
          <p>{calculateStorage.operand}</p>
        </span>
        <button name="operand" value={'+'} onClick={handleClick}>+</button>
        <button name="operand" value={'-'} onClick={handleClick}>-</button>
        <button name="operand" value={'/'} onClick={handleClick}>/</button>
        <button name="operand" value={'*'} onClick={handleClick}>*</button>
        
        <button value={1} onClick={handleClick}>1</button>
        <button value={2} onClick={handleClick}>2</button>
        <button value={3} onClick={handleClick}>3</button>
        <button value={4} onClick={handleClick}>4</button>
        <button value={5} onClick={handleClick}>5</button>
        <button value={6} onClick={handleClick}>6</button>
        <button value={7} onClick={handleClick}>7</button>
        <button value={8} onClick={handleClick}>8</button>
        <button value={9} onClick={handleClick}>9</button>
        <button value={0} onClick={handleClick}>0</button>
      
      </header>
    </div>
  );
}

export default App;
