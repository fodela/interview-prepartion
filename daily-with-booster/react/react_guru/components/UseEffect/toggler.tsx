/*
useEffect help determine when the DOM should render or mount
syntax: useEffect(callback(), [dependencyArray])
Use Cases:
We can mount with at the following times by changing the dependency array
Mount;
1. always => give no second argument or dependency array
2. on first render => empty dependency array -> []
3. First render and if a variable change => [variable1, variable2...]
4. Only if a variable changes => add conditional check in the callback function and provide the changing variable as a dependency -> 
```js
useEffect(()=>{
 if(condition){
    doThis...
 }else{
    doNothing
 }
},[variable])
```
5. Only once => same as 4 but in this case, the if statement make set the dependent variable false
6.When cleanup is needed => return a function that perform the clean up. -> return clearInterval(intervalName)
*/

import { NextComponentType } from "next";
import React, { FormEvent, useEffect, useRef, useState } from "react";

interface togglerProps {
  toggle: boolean;
  toggleHandler: () => void;
}

const Toggler: React.FC<togglerProps> = ({ toggle, toggleHandler }) => {
  const [title, setTitle] = useState("Hello Fo!");
  const didMount = useRef(false);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const stopWatchInterval = setTimeout(() => setTimer(timer - 1), 1000);
    if (!timer) {
      return clearInterval(stopWatchInterval);
    }
  });

  useEffect(() => {
    if (didMount.current) {
      console.log("I run only if toggle changes");
    } else {
      didMount.current = true;
    }
  }, [toggle]);

  const titleHandler = (event: FormEvent) => {
    event.preventDefault();
    setTitle(event.target[0].value);
    event.target[0].value = "";
  };
  return (
    <div>
      <button type="button" onClick={toggleHandler}>
        Toggle
      </button>

      <form onSubmit={titleHandler}>
        <input type="text" />
      </form>

      {toggle && <div>{title}</div>}

      <h2>{timer}</h2>
    </div>
  );
};

export default Toggler;
