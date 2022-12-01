import React from 'react'
interface TodoFilterProps{
  dispatch:(value:{type: string})=>void
}

const TodoFilter:React.FC<TodoFilterProps> = ({dispatch}) => {

    const allDoneHandler = ()=>{
        dispatch({type: "SHOW_ALL"})
      };

    const completeHandler = ()=>{
        dispatch({type: "SHOW_COMPLETE"})
      };
      
    const incompleteHandler = ()=>{
        dispatch({type: "SHOW_INCOMPLETE"})
      };

  return (
    <div>
    <button onClick={allDoneHandler}>all</button>
    <button onClick={completeHandler}>completed</button>
    <button onClick={incompleteHandler}>incomplete</button>
    </div>
  )
}

export default TodoFilter