import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container text-center mt-5" id="calc-container">
        <div className="row g-2">
          <div className="col d-flex justify-content-end align-items-center" id="result">0</div>
        </div>

        <div className="row justify-content-center align-items-center g-2">
          <button type="button" className="col">AC</button>
          <button type="button" className="col">+/-</button>
          <button type="button" className="col">%</button>
          <button type="button" className="col">÷</button>
        </div>

        <div className="row justify-content-center align-items-center g-2">
          <button type="button" className="col">7</button>
          <button type="button" className="col">8</button>
          <button type="button" className="col">9</button>
          <button type="button" className="col">x</button>
        </div>

        <div className="row justify-content-center align-items-center g-2">
          <button type="button" className="col">4</button>
          <button type="button" className="col">5</button>
          <button type="button" className="col">6</button>
          <button type="button" className="col">-</button>
        </div>

        <div className="row justify-content-center align-items-center g-2">
          <button type="button" className="col">1</button>
          <button type="button" className="col">2</button>
          <button type="button" className="col">3</button>
          <button type="button" className="col">+</button>
        </div>

        <div className="row justify-content-center align-items-center g-2">
          <button type="button" className="col-6">0</button>
          <button type="button" className="col">.</button>
          <button type="button" className="col">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
