import React from 'react'
import { Todo } from '../model';
import './styles.css'
import { TodoListItems } from './TodoListItems';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}


export const TodoList = ({todos, setTodos}: Props) => {

  const todoList = todos.map(todo => {
    return (
      <TodoListItems key={todo.id} title={todo.todo} isDone={todo.isDone}/>
    )
  })


  return (
    <div className='todos'>
      {todoList}
    </div>
  )
}
