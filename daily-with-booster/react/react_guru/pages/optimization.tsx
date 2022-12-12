/*
Dear Future me!
useMemo is used to memoize a value. This value's is tracked and used as a variable in the dependency array of useMemo and the callback function of useMemo is only executed when the value changes.

React Memo API: As default when parent change and rerender so does the children. React.memo is used to prevent specific components from rerendering when their parent is rerendered if nothing have change.

useCallback: As  default whenever a component rerender the function defined in them are re-declared and if they are passed as props to any child, the child will rerender after parent rerender even when wrapped with React.memo. useCallback prevent the function from being redefined with every rerender unless a variable provided in the dependency array is changed.
*/

import React, { useCallback, useState } from "react";
import List from "../components/optimization/List";

const Optimization = () => {
  console.log("Render: APP");
  const [users, setUsers] = useState([
    { id: "a", name: "Robin" },
    { id: "b", name: "Dennis" },
  ]);
  const [text, setText] = useState("");

  const handleText = (event: InputEvent) => {
    console.log(event.target.value);
    setText(event.target!.value);
  };
  const addUserHandler = () => {};
  const removeUserHandler = useCallback(() => () => {}, [users]);

  return (
    <div>
      <input type="text" onChange={handleText} />
      <button onClick={addUserHandler}>Add User</button>

      <List list={users} onRemove={removeUserHandler}></List>
    </div>
  );
};

export default Optimization;
