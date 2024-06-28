import React from 'react';
import './App.css';
import Calculator from './Calculator';

function App() {
  return (
    <div className="App">
      <h1>Калькулятор</h1>
      <Calculator x={6} y={9} />
    </div>
  );
}

export default App;
