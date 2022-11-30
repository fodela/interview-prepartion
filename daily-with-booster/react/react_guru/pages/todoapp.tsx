import React, { createContext, FormEvent, useReducer, useRef } from 'react'
import todoReducer from '../reduce/todoReducer'
import todoStatusReducer from '../reduce/todoStatusReducer'
import todoInterface from '../typesInterfaces/todoInterface'
import { v4 as uuidv4 } from 'uuid'
import TodoFilter from '../components/TodoFilter'
import AddTodo from '../components/AddTodo/AddTodo'
import Todo from '../components/TodoList/Todo/Todo'
import TodoList from '../components/TodoList/TodoList'
import useTodoContext from '../context/TodoContext'

interface TodoType{
    id:string
    task:string
    isComplete: boolean
}
const todoList = [
  {id:uuidv4(), task: "finish up", isComplete:true},
  {id:uuidv4(), task: "learn typescript types", isComplete:false},
  {id:uuidv4(), task: "go for lectures", isComplete:true},
  {id:uuidv4(), task: "not done", isComplete:false}
]

const todoapp: React.FC = () => {
  
  const inputRef = useRef()
  
  const [todoFilter, dispatchFilter] = useReducer(todoStatusReducer, "ALL")  

  const [todos, dispatchTodos] = useReducer(todoReducer, todoList)


  
  const filteredTodos = todos.filter(
    (todo)=>{
      if (todoFilter === "ALL"){
        return true
      }
      if (todoFilter === "COMPLETE" && todo.isComplete){
        return true
      }
      if (todoFilter === "INCOMPLETE" && !todo.isComplete){
        return true
      }
      return false
    }
  )
  
  

  return (
    <>
    <ul>
      {
      filteredTodos.map(todo=>(
        <Todo todo={todo} dispatch={dispatchTodos}/>
      )
      )
}
    </ul>
    </>
    
  )
}

export default todoapp