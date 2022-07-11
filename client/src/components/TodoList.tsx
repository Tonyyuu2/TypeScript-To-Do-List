import React from "react";
import { Todo } from "../model";
import "./styles.css";
import { TodoListItems } from "./TodoListItems";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList = ({
  todos,
  setTodos,
}: Props) => {
  return (
    <>
      <div className="container">
            <div
              className="todos"
            >
              <span className="todos__heading">Active Tasks</span>
              {todos.map((todo) => (
                <TodoListItems
                  todo={todo}
                  key={todo.id}
                  todos={todos}
                  setTodos={setTodos}
                />
              ))}
            </div>;
          <div className="todos remove">
            <span className="todos__heading">Completed Tasks</span>
            {todos.map((todo) => (
              <TodoListItems
                todo={todo}
                key={todo.id}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
          </div>
      </div>
    </>
  );
};
