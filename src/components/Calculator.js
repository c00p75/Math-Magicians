import { useState } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

// Refactoring class component to function component which uses a React hook
const Calculator = () => {
  // initializing current state `initCalc` and function that updates the state `setCalculater`
  const [initCalc, setCalculator] = useState({ total: null, next: null, operation: null });

  // Defining function to handle click events and update state
  const handleClick = (event) => {
    // Changes initial calculator state by calling imported `calculate` function
    setCalculator(calculate(initCalc, event.target.innerHTML));
  };
  // Definfing HTML that should be rendered to the DOM
  return (
    <div className="container-fluid d-md-flex align-items-start justify-content-center">
      <div className="calc-text px-2 pt-5">
        <p>Let&apos;s do some math!</p>
      </div>

      <div className="col container text-center px-5 pt-5" id="calc-container">
        <div className="row g-2">
          <div className="col d-flex justify-content-end align-items-center" id="result">
            {initCalc.next || initCalc.total || 0}
          </div>
        </div>

        <div className="row justify-content-center align-items-center g-2">
          <button onClick={handleClick} type="button" className="col">AC</button>
          <button onClick={handleClick} type="button" className="col">+/-</button>
          <button onClick={handleClick} type="button" className="col">%</button>
          <button onClick={handleClick} type="button" className="col">÷</button>
        </div>

        <div className="row justify-content-center align-items-center g-2">
          <button onClick={handleClick} type="button" className="col">7</button>
          <button onClick={handleClick} type="button" className="col">8</button>
          <button onClick={handleClick} type="button" className="col">9</button>
          <button onClick={handleClick} type="button" className="col">x</button>
        </div>

        <div className="row justify-content-center align-items-center g-2">
          <button onClick={handleClick} type="button" className="col">4</button>
          <button onClick={handleClick} type="button" className="col">5</button>
          <button onClick={handleClick} type="button" className="col">6</button>
          <button onClick={handleClick} type="button" className="col">-</button>
        </div>

        <div className="row justify-content-center align-items-center g-2">
          <button onClick={handleClick} type="button" className="col">1</button>
          <button onClick={handleClick} type="button" className="col">2</button>
          <button onClick={handleClick} type="button" className="col">3</button>
          <button onClick={handleClick} type="button" className="col">+</button>
        </div>

        <div className="row justify-content-center align-items-center g-2">
          <button onClick={handleClick} type="button" className="col-6">0</button>
          <button onClick={handleClick} type="button" className="col">.</button>
          <button onClick={handleClick} type="button" className="col">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
