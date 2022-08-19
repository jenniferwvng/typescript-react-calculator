import './App.css';
import React, { useState } from 'react';

function App() {
  const [clickedOperand, setClickOperand] = useState(false);  
  const [calculateStorage, setCalculateStorage] = useState({
    calculatedSum: 0,
    operand: '',
    numBeforeOperand: 0,
    numAfterOperand: 0
  });


  const handleNumClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    let button = e.target as HTMLButtonElement;

    //vid första klick, kolla så det inte är operand
    //första numrena man klickar ska adderas till numBeforeOperand
    //vid klick på operand, ska alla nummer man klickar adderas till numAfterOperand
    //när klart, vid onclick på = ska funktion använda dessa property values och addera/subtrahera/dividera/multiplicera (calculate) beroende på vald operand 
    //därefter kan du välja att antingen AC (radera alla property values), eller att forsätta genom att ta calculatedSum som ny numBeforeOperand ifall du klickar = istället för AC


    //if clickedoperand, numafteroperand, else if clickedoperand && calculatedSum !== 0, numAfterOperand === calculatedSum (skriv över) och invoke calculate vid press =, else numBeforeOperand (dvs )
    if (clickedOperand) {
      setCalculateStorage(prevState => ({
        ...prevState, 
        numAfterOperand: Number(button.value)
      }))
      console.log(calculateStorage.calculatedSum)
    } 
    
    if (clickedOperand && calculateStorage.calculatedSum !== 0) {
      console.log('calculated sum is now not longer 0')
      //If sum becomes 0 after subtraction this wont work anymore: could change initial state to null and use it as comparator?
      setCalculateStorage(prevState => ({
        ...prevState, 
        numBeforeOperand: prevState.calculatedSum,
        calculatedSum: 0
      }))
    } else {
      setCalculateStorage(prevState => ({
        ...prevState, 
        numBeforeOperand: Number(button.value)
      }))
    }
  }

  const handleOperandClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    let button = e.target as HTMLButtonElement;

    setCalculateStorage(prevState => ({
      ...prevState, 
      operand: button.value
    }));  

    setClickOperand(true);
    //reset to false once click AC
  }

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {

    setCalculateStorage(prevState => ({
      ...prevState, 
      calculatedSum: 0,
      operand: '',
      numBeforeOperand: 0,
      numAfterOperand: 0
    }));  
    
    setClickOperand(false);
  }
    
  const handleCalculation = () => {
    if (calculateStorage.operand === '+') {
      setCalculateStorage(prevState => ({
        ...prevState, 
        calculatedSum: prevState.numBeforeOperand + prevState.numAfterOperand
      }));        
    } else if (calculateStorage.operand === '-') {

    } else if (calculateStorage.operand === '*') {

    } else {
      //divide
    }
  }

  console.log('Calculated sum:' + calculateStorage.calculatedSum)

  
  console.log('operand:' + calculateStorage.operand)
  console.log('numBeforeOperand:' + calculateStorage.numBeforeOperand)
  console.log('numAfterOperand:' + calculateStorage.numAfterOperand)
  console.log('calculatedSum:' + calculateStorage.calculatedSum)
  


  return (
    <div className="App">
      <header>
        <h1>Typescript Calculator</h1>
        <span>
          <p>{calculateStorage.numBeforeOperand}</p>
          <p>{calculateStorage.operand}</p>
          <p>{calculateStorage.numAfterOperand}</p>
          <p style={{color: 'red'}}>{calculateStorage.calculatedSum}</p>
        </span>
        <button name="operand" value={'+'} onClick={handleOperandClick}>+</button>
        <button name="operand" value={'-'} onClick={handleOperandClick}>-</button>
        <button name="operand" value={'/'} onClick={handleOperandClick}>/</button>
        <button name="operand" value={'*'} onClick={handleOperandClick}>*</button>

        <button name="calculate" value={'='} onClick={handleCalculation} style={{backgroundColor: 'red'}}>=</button>
        <button name="reset" value={'AC'} onClick={handleReset} style={{backgroundColor: 'orange'}}>AC</button>
        
        <button value={1} onClick={handleNumClick}>1</button>
        <button value={2} onClick={handleNumClick}>2</button>
        <button value={3} onClick={handleNumClick}>3</button>
        <button value={4} onClick={handleNumClick}>4</button>
        <button value={5} onClick={handleNumClick}>5</button>
        <button value={6} onClick={handleNumClick}>6</button>
        <button value={7} onClick={handleNumClick}>7</button>
        <button value={8} onClick={handleNumClick}>8</button>
        <button value={9} onClick={handleNumClick}>9</button>
        <button value={0} onClick={handleNumClick}>0</button>
      
      </header>
    </div>
  );
}

export default App;
