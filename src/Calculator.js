import React from 'react';

const Calculator = (props) => {
  const { x, y } = props;

  const add = () => x + y;
  const subtract = () => x - y;
  const multiply = () => x * y;
  const divide = () => x / y;
  const power = () => Math.pow(x, y);

  return (
    <div>
      <p>Числа: {x} і {y}</p>
      <div>
        <button onClick={() => alert(`Сума: ${add()}`)}>Додавання</button>
        <button onClick={() => alert(`Різниця: ${subtract()}`)}>Віднімання</button>
        <button onClick={() => alert(`Множення: ${multiply()}`)}>Множення</button>
        <button onClick={() => alert(`Ділення: ${divide()}`)}>Ділення</button>
        <button onClick={() => alert(`Ступінь: ${power()}`)}>Ступінь</button>
      </div>
    </div>
  );
};

export default Calculator;
