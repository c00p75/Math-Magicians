import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    // Ensure that props can be accessed in order to inherit parent's constuctor method.
    super(props);

    // Setting up initial states to null
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    // Binding in order to `this` work even in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  // Defining function to handle click events
  handleClick = (event) => {
    // Changes the state to the result of the `calculate` function
    this.setState((state) => calculate(state, event.target.innerHTML));
  }

  render() {
    // To destructure this.state to individual variables
    const { total, next, operation } = this.state;

    // Definfing HTML that should be rendered to the DOM
    return (
      <div className="container text-center mt-5" id="calc-container">
        <div className="row g-2">
          <div className="col d-flex justify-content-end align-items-center" id="result">
            {total || next || operation || 0}
          </div>
        </div>

        <div className="row justify-content-center align-items-center g-2">
          <button onClick={this.handleClick} type="button" className="col">AC</button>
          <button onClick={this.handleClick} type="button" className="col">+/-</button>
          <button onClick={this.handleClick} type="button" className="col">%</button>
          <button onClick={this.handleClick} type="button" className="col">÷</button>
        </div>

        <div className="row justify-content-center align-items-center g-2">
          <button onClick={this.handleClick} type="button" className="col">7</button>
          <button onClick={this.handleClick} type="button" className="col">8</button>
          <button onClick={this.handleClick} type="button" className="col">9</button>
          <button onClick={this.handleClick} type="button" className="col">x</button>
        </div>

        <div className="row justify-content-center align-items-center g-2">
          <button onClick={this.handleClick} type="button" className="col">4</button>
          <button onClick={this.handleClick} type="button" className="col">5</button>
          <button onClick={this.handleClick} type="button" className="col">6</button>
          <button onClick={this.handleClick} type="button" className="col">-</button>
        </div>

        <div className="row justify-content-center align-items-center g-2">
          <button onClick={this.handleClick} type="button" className="col">1</button>
          <button onClick={this.handleClick} type="button" className="col">2</button>
          <button onClick={this.handleClick} type="button" className="col">3</button>
          <button onClick={this.handleClick} type="button" className="col">+</button>
        </div>

        <div className="row justify-content-center align-items-center g-2">
          <button onClick={this.handleClick} type="button" className="col-6">0</button>
          <button onClick={this.handleClick} type="button" className="col">.</button>
          <button onClick={this.handleClick} type="button" className="col">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
