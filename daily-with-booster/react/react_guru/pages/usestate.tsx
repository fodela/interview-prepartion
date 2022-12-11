import React, { useState } from "react";

// Rule always use a function your state update thus setStateName(state=>(do_this))

const Counter = () => {
  const [count, setCount] = useState(0);

  //   functions
  const decreaseCountHandler = () => {
    setTimeout(() => setCount((state) => state - 1), 1000);
  };
  const increaseCountHandler = () => {
    setTimeout(() => setCount((state) => state + 1), 1000);
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
