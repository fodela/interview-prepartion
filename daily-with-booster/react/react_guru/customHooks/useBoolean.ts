import React, { useState } from "react";

type useBooleanType = [
  boolean,
  {
    setToggle: () => void;
    setFalse: () => void;
    setTrue: () => void;
  }
];

const useBoolean = (initialState = false): useBooleanType => {
  const [state, setState] = useState(initialState);

  const handleToggle = () => setState(!state);
  const handleFalse = () => setState(false);
  const handleTrue = () => setState(true);
  return [
    state,
    {
      setToggle: handleToggle,
      setFalse: handleFalse,
      setTrue: handleTrue,
    },
  ];
};

export default useBoolean;
