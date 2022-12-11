import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  //   functions
  const decreaseCountHandler = () => {
    setCount(count - 1);
  };
  const increaseCountHandler = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={decreaseCountHandler}>-</button>
      <button onClick={increaseCountHandler}>+</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default Counter;
