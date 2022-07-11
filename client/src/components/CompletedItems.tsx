import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdOutlineDone, MdDownloadDone, MdOutlineKeyboardReturn } from "react-icons/md";



interface Props {
  key: number;
  todo: Todo;
  active: Todo[];
  setActive: React.Dispatch<React.SetStateAction<Todo[]>>;
  complete: Todo[];
  setComplete: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const CompletedItems = ({ todo, key, active, setActive, complete, setComplete }: Props) => {

  const handleCompleteDelete = ( id: number) => {
    setComplete(complete.filter((todo) => todo.id !== id));
  };

  const handleReturn = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, id: number) => {
    e.preventDefault();

    const updateActive = complete.filter((todo) => todo.id === id)
    setActive(prev => [...prev, ...updateActive])
    const updateComplete = complete.filter((todo) => todo.id !== id)
    setComplete(updateComplete)
  }

  return (
    <form className="todos__items">
      
        <s className="todos__items--text">{todo.todo}</s>
      <div>
        <span className="icon" onClick={(e) => handleReturn(e, todo.id)}>
        <MdOutlineKeyboardReturn className="edit__icon"/>
        </span>
        <span className="icon" onClick={() => handleCompleteDelete(todo.id)}>
          <AiFillDelete className="edit__icon" />
        </span>
      </div>
    </form>
  );
};
