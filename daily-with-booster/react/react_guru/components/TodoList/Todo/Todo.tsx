import React, { useContext, useState } from 'react'
import todoInterface from '../../../typesInterfaces/todoInterface'
interface TodoProps{
        todo:todoInterface 
    dispatch:(value:{
      type: string
      id: string
      task: string
    })=>void
}
const Todo: React.FC<TodoProps> = ({todo, dispatch}) => {
  const isCompleteTodoHandler = (item:todoInterface)=>{
    dispatch(
      {type: (todo.isComplete ? "UNDO_TODO" : "DO_TODO"), id:item.id, task:""}
    )
  }
  return (
    <li
      
    key={todo.id}
  >
    <input 
    type="checkbox" 
    name="doneState" 
    id="doneState" 
    checked={todo.isComplete}
    onChange={()=>isCompleteTodoHandler(todo)}
    />
    <span>{todo.task}</span>

  </li>
  )
}

export default Todo