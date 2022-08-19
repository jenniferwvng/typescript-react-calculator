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

  console.log('numBeforeOperand:' + calculateStorage.numBeforeOperand)
  console.log('numAfterOperand:' + calculateStorage.numAfterOperand)
  console.log('calculatedSum:' + calculateStorage.calculatedSum)
  console.log('operand:' + calculateStorage.operand)

  const handleNumClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    let button = e.target as HTMLButtonElement;

    //vid första klick, kolla så det inte är operand
    //första numrena man klickar ska adderas till numBeforeOperand
    //vid klick på operand, ska alla nummer man klickar adderas till numAfterOperand
    //när klart, vid onclick på = ska funktion använda dessa property values och addera/subtrahera/dividera/multiplicera (calculate) beroende på vald operand 
    //därefter kan du välja att antingen AC (radera alla property values), eller att forsätta genom att ta calculatedSum som ny numBeforeOperand ifall du klickar = istället för AC

    if (clickedOperand) {
      setCalculateStorage(prevState => ({
        ...prevState, 
        numAfterOperand: Number(button.value)
      }))      
    } 
    
    if (clickedOperand && calculateStorage.calculatedSum !== 0) {
      //If sum becomes 0 while calculating this wont work anymore: could change initial state to null and use it as comparator? flag?
      setCalculateStorage(prevState => ({
        ...prevState, 
        numBeforeOperand: prevState.calculatedSum,
        calculatedSum: 0
      }))
    } 

    if (!clickedOperand) {
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
      setCalculateStorage(prevState => ({
        ...prevState, 
        calculatedSum: Number(prevState.numBeforeOperand - prevState.numAfterOperand)
      }));  
    } else if (calculateStorage.operand === '*') {
      setCalculateStorage(prevState => ({
        ...prevState, 
        calculatedSum: prevState.numBeforeOperand * prevState.numAfterOperand
      }));  
    } else {
      setCalculateStorage(prevState => ({
        ...prevState, 
        calculatedSum: prevState.numBeforeOperand / prevState.numAfterOperand
      }));  
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Typescript Calculator</h1>
      </header>
      <main>
        <div style={{display: 'flex', justifyContent: 'center', fontWeight: 'bold', fontSize: '30px'}}>          
            <p>{calculateStorage.numBeforeOperand}</p>
            <p>{calculateStorage.operand}</p>
            <p>{calculateStorage.numAfterOperand}</p>
            <p>=</p>
            <p style={{color: 'red'}}>{calculateStorage.calculatedSum}</p>          
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
        <span style={{display: 'flex', flexDirection: 'column'}}>
          <button name="reset" value={'AC'} onClick={handleReset} style={{backgroundColor: 'lightgrey', border: 'none', padding: '25px', borderRadius: '50%'}}>AC</button>
          <button value={7} onClick={handleNumClick} style={{backgroundColor: 'grey', border: 'none', padding: '25px', borderRadius: '50%'}}>7</button>
          <button value={4} onClick={handleNumClick} style={{backgroundColor: 'grey', border: 'none', padding: '25px', borderRadius: '50%'}}>4</button>
          <button value={1} onClick={handleNumClick} style={{backgroundColor: 'grey', border: 'none', padding: '25px', borderRadius: '50%'}}>1</button>
          <button value={0} onClick={handleNumClick} style={{backgroundColor: 'grey', border: 'none', padding: '25px', borderRadius: '50%'}}>0</button>
        </span>

        <span style={{display: 'flex', flexDirection: 'column'}}>
          <button style={{backgroundColor: 'lightgrey', border: 'none', padding: '25px', borderRadius: '50%'}}>.</button>
          <button value={8} onClick={handleNumClick} style={{backgroundColor: 'grey', border: 'none', padding: '25px', borderRadius: '50%'}}>8</button>
          <button value={5} onClick={handleNumClick} style={{backgroundColor: 'grey', border: 'none', padding: '25px', borderRadius: '50%'}}>5</button>
          <button value={2} onClick={handleNumClick} style={{backgroundColor: 'grey', border: 'none', padding: '25px', borderRadius: '50%'}}>2</button>
        </span>

        <span style={{display: 'flex', flexDirection: 'column'}}>
          <button style={{backgroundColor: 'lightgrey', border: 'none', padding: '25px', borderRadius: '50%'}}>.</button>
          <button value={9} onClick={handleNumClick} style={{backgroundColor: 'grey', border: 'none', padding: '25px', borderRadius: '50%'}}>9</button>
          <button value={6} onClick={handleNumClick} style={{backgroundColor: 'grey', border: 'none', padding: '25px', borderRadius: '50%'}}>6</button>
          <button value={3} onClick={handleNumClick} style={{backgroundColor: 'grey', border: 'none', padding: '25px', borderRadius: '50%'}}>3</button>
        </span>

        <span style={{display: 'flex', flexDirection: 'column'}}>
          <button name="operand" value={'/'} onClick={handleOperandClick} style={{backgroundColor: 'orange', border: 'none', padding: '25px', borderRadius: '50%'}}>/</button>
          <button name="operand" value={'*'} onClick={handleOperandClick} style={{backgroundColor: 'orange', border: 'none', padding: '25px', borderRadius: '50%'}}>*</button>
          <button name="operand" value={'-'} onClick={handleOperandClick} style={{backgroundColor: 'orange', border: 'none', padding: '25px', borderRadius: '50%'}}>-</button>        
          <button name="operand" value={'+'} onClick={handleOperandClick} style={{backgroundColor: 'orange', border: 'none', padding: '25px', borderRadius: '50%'}}>+</button>
          <button name="calculate" value={'='} onClick={handleCalculation} style={{backgroundColor: 'orange', border: 'none', padding: '25px', borderRadius: '50%'}}>=</button>   
        </span>      
        </div>
      </main>
    </div>
  );
}

export default App;
