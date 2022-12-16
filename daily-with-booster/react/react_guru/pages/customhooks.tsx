import React from "react";
import useBoolean from "../customHooks/useBoolean";

const Customhooks = () => {
  const [isToggle, { setToggle, setTrue, setFalse }] = useBoolean();
  return (
    <div>
      <button onClick={setToggle}>Toggle</button>
      <button onClick={setTrue}>True</button>
      <button onClick={setFalse}>False</button>
      {isToggle.toString()}
    </div>
  );
};

export default Customhooks;
