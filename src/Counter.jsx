import React, { useState } from 'react';
import './Counter.css'; // Import styles for basic styling

const Counter = () => {
  // Initialize state with useState
  const [count, setCount] = useState(0);

  // Handlers for increment, decrement, and reset
  const increment = () => {
    if (count < 100) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h1>Counter: {count}</h1>
      <button onClick={increment} disabled={count === 100}>
        Increase
      </button>
      <button onClick={decrement} disabled={count === 0}>
        Decrease
      </button>
      <button onClick={reset}>Reset</button>

      {/* Bonus: Progress bar */}
      <div className="progress-bar" style={{ width: `${count}%` }}></div>

      {/* Edge case feedback */}
      {count === 0 && <p>You have reached the minimum!</p>}
      {count === 100 && <p>You have reached the maximum!</p>}
    </div>
  );
};

export default Counter;