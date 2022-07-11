import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdOutlineDone, MdDownloadDone } from "react-icons/md";

interface Props {
  key: number;
  todo: Todo;
  active: Todo[];
  setActive: React.Dispatch<React.SetStateAction<Todo[]>>;
  complete: Todo[];
  setComplete: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const TodoListItems = ({ todo, key, active, setActive, complete, setComplete }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, id: number) => {
    e.preventDefault()
    const transferData = active.filter((todo) => todo.id === id) 
    setActive(active.filter((todo) => todo.id !== id))
    setComplete(prev => [...prev, ...transferData])
  };

  const handleActiveDelete = (id: number) => {
    setActive(active.filter((todo) => todo.id !== id));
  };
  const handleCompleteDelete = (id: number) => {
    setComplete(complete.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent<EventTarget>, id: number) => {
    e.preventDefault();

    if (editTodo === "") {
      setActive(
        active.map((todo) =>
          todo.id === id ? { ...todo, todo: todo.todo } : todo
        )
      );
      setEditTodo(todo.todo);
    } else {
      setActive(
        active.map((todo) =>
          todo.id === id ? { ...todo, todo: editTodo } : todo
        )
      );
    }
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form className="todos__items" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <>
          <input
            ref={inputRef}
            className="input__items--text"
            value={editTodo}
            type="input"
            onChange={(e) => setEditTodo(e.target.value)}
            required
          />
          <span className="icon" onClick={(e) => handleEdit(e, todo.id)}>
            <MdDownloadDone className="edit__icon" />
          </span>
        </>
      ) : todo.isDone ? (
        <s className="todos__items--text">{todo.todo}</s>
      ) : (
        <span className="todos__items--text">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit className="edit__icon" />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete className="edit__icon" />
        </span>
        <span className="icon" onClick={(e) => handleDone(e, todo.id)}>
          <MdOutlineDone className="edit__icon" />
        </span>
      </div>
    </form>
  );
};
