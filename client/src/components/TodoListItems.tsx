import React from "react";
import './styles.css'

interface Props {
  key: number;
  title: string;
  isDone: boolean;
}

export const TodoListItems = ({ key, title, isDone }: Props) => {
  return <li>{title}</li>;
};
