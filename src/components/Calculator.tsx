import React, { useState } from 'react';
import styles from '../styles/Calculator.module.css'

interface CalculatorStorage {
    calculatedSum: any,
    operand: string
    numBeforeOperand: number,
    numAfterOperand: number
}

const Calculator = (): JSX.Element => {
    const [clickedOperand, setClickOperand] = useState(false);  

    const [calculateStorage, setCalculateStorage] = useState<CalculatorStorage>({
      calculatedSum: '',
      operand: '',
      numBeforeOperand: 0,
      numAfterOperand: 0
    });
  
    const {
        calculatedSum, 
        operand, 
        numBeforeOperand, 
        numAfterOperand
    } = calculateStorage;

    console.log('numBeforeOperand:' + numBeforeOperand)
    console.log('numAfterOperand:' + numAfterOperand)
    console.log('calculatedSum:' + calculatedSum)
    console.log('operand:' + operand)
  
    
    const handleNumClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      let button = e.target as HTMLButtonElement;
  
      if (clickedOperand) {
        setCalculateStorage(prevState => ({
          ...prevState, 
          numAfterOperand: Number(button.value)
        }))      
      } 
      
      if (clickedOperand && calculatedSum !== '') {
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
    if (operand === '+') {
      setCalculateStorage(prevState => ({
        ...prevState, 
        calculatedSum: prevState.numBeforeOperand + prevState.numAfterOperand
      }));        
    } else if (operand === '-') {
      setCalculateStorage(prevState => ({
        ...prevState, 
        calculatedSum: Number(prevState.numBeforeOperand - prevState.numAfterOperand)
      }));  
    } else if (operand === '*') {
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
          <div className={styles.inputDisplay}>   
              <p>{numBeforeOperand}</p>
              <p>{operand}</p>
              <p>{numAfterOperand}</p>
              <p>=</p>
              <p style={{color: 'red'}}>{calculatedSum}</p>          
          </div>
  
          <div className={styles.calculatorButtonsDiv}>
          <span>
            <button name="reset" value={'AC'} onClick={handleReset}>AC</button>
            <button value={7} onClick={handleNumClick}>7</button>
            <button value={4} onClick={handleNumClick}>4</button>
            <button value={1} onClick={handleNumClick}>1</button>
            <button value={0} onClick={handleNumClick}>0</button>
          </span>
  
          <span>
            <button>.</button>
            <button value={8} onClick={handleNumClick}>8</button>
            <button value={5} onClick={handleNumClick}>5</button>
            <button value={2} onClick={handleNumClick}>2</button>
          </span>
  
          <span>
            <button>.</button>
            <button value={9} onClick={handleNumClick}>9</button>
            <button value={6} onClick={handleNumClick}>6</button>
            <button value={3} onClick={handleNumClick}>3</button>
          </span>
  
          <span>
            <button name="operand" value={'/'} onClick={handleOperandClick}>/</button>
            <button name="operand" value={'*'} onClick={handleOperandClick}>*</button>
            <button name="operand" value={'-'} onClick={handleOperandClick}>-</button>        
            <button name="operand" value={'+'} onClick={handleOperandClick}>+</button>
            <button name="calculate" value={'='} onClick={handleCalculation}>=</button>   
          </span>      
          </div>
        </main>
      </div>
    );
}

export default Calculator;
