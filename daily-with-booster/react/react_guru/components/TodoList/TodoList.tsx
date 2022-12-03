import React, { useContext } from 'react'
import todoInterface from '../../typesInterfaces/todoInterface'
import Todo from './Todo/Todo'
interface TodoListProps{
    todos: todoInterface[],
    dispatch:(value:{
      type: string
      id: string
      task: string
    })=>void
}
const TodoList: React.FC<TodoListProps> = ({todos, dispatch}) => {
  return (
    <ul>
      {
      todos.map(todo=>(
        <Todo todo={todo} dispatch={dispatch}/>
      )
      )
}
    </ul>
  )
}

export default TodoList