import React from "react";
import './styles.css'
import { Todo } from "../model";

interface Props {
  key: number;
  todo: Todo;
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoListItems = ({ todo, key, todos, setTodos }: Props) => {
  return <li>{}</li>;
};
