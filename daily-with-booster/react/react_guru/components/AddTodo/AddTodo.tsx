import React, { FormEvent, useRef, useState } from 'react'
import todoInterface from '../../typesInterfaces/todoInterface'
import { v4 as uuidv4 } from "uuid"

interface AddTodoProps{
  dispatch:(value:{
    type: string
    id: string
    task: string
})=>void
}

const AddTodo:React.FC<AddTodoProps> = ({dispatch}) => {
  const inputRef = useRef<HTMLInputElement>()
  const addTodoHandler = (event: FormEvent) =>{
    event.preventDefault()
    if (inputRef.current!.value.trim().length){
        dispatch({type: "ADD_TODO",id:uuidv4(), task:inputRef.current!.value.trim()})
        inputRef.current!.value=""
      }
    }

  return (
    <form onSubmit={addTodoHandler}>
        <input type="text"  ref={inputRef}/>
    </form>
  )
}

export default AddTodo