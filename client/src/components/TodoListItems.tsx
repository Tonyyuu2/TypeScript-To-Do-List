import React from "react";
import "./styles.css";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete, } from 'react-icons/ai'
import { MdOutlineDone, } from 'react-icons/md'

interface Props {
  key: number;
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoListItems = ({ todo, key, todos, setTodos }: Props) => {
  return (
    <form className="todos__items">
      <span className="todos__items--text">{todo.todo}</span>
      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon">
        <AiFillDelete />
        </span>
        <span className="icon">
        < MdOutlineDone/>
        </span>
      </div>
    </form>
  );
};
