import React from "react";
import { Todo } from "../model";
import "./styles.css";
import { ActiveItems } from "./ActiveItems";
import { CompletedItems } from "./CompletedItems";

interface Props {
  active: Todo[];
  setActive: React.Dispatch<React.SetStateAction<Todo[]>>;
  complete: Todo[];
  setComplete: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const TodoList = ({
  active,
  setActive,
  complete,
  setComplete
}: Props) => {
  return (
    <>
      <div className="container">
            <div
              className="todos"
            >
              <span className="todos__heading">Active Tasks</span>
              {active.map((todo) => (
                <ActiveItems
                  todo={todo}
                  key={todo.id}
                  complete={complete}
                  setComplete={setComplete}
                  active={active}
                  setActive={setActive}
                />
              ))}
            </div>
          <div className="todos remove">
            <span className="todos__heading">Completed Tasks</span>
            {complete.map((todo) => (
              <CompletedItems
                todo={todo}
                key={todo.id}
                active={active}
                setActive={setActive}
                complete={complete}
                setComplete={setComplete}
              />
            ))}
          </div>
      </div>
    </>
  );
};
