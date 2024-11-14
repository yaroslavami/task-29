import React from 'react';
import './App.css'

const Calculator = (props) => {
  const { x, y } = props;

  const add = () => x + y;
  const subtract = () => x - y;
  const multiply = () => x * y;
  const divide = () => x / y;
  const power = () => Math.pow(x, y);

  return (
    <div className='calculator-container'>
      <p>Integers: {x} and {y}</p>
      <div>
        <button onClick={() => alert(`Sum: ${add()}`)}>Addition</button>
        <button onClick={() => alert(`Difference: ${subtract()}`)}>Subtraction</button>
        <button onClick={() => alert(`Multiplied: ${multiply()}`)}>Multiplication</button>
        <button onClick={() => alert(`Divided: ${divide()}`)}>Division</button>
        <button onClick={() => alert(`Powered: ${power()}`)}>Power of</button>
      </div>
    </div>
  );
};

export default Calculator;
