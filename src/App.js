import React from 'react';
import './App.css';
import Calculator from './Calculator';

function App() {
  const x = Math.floor(Math.random() * 30) + 1;
  const y = Math.floor(Math.random() * 10) + 1;
  return (
    <div className="App">
      <h1>Random Calculator</h1>
      <Calculator x={x} y={y} />
      <p>Reload page to get new numbers</p>
    </div>
  );
}

export default App;
