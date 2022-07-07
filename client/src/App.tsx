import React, { useState } from "react";
import "./App.css";
import { InputField } from "./components/InputField";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  console.log('todos :', todos);

  const handleAdd = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    if (todo) {
      setTodos((prev) => [...prev, { id: Date.now(), todo, isDone: false }]);
      setTodo("")
    }
  };

  return (
    <div className="Body">
      <span className="heading">task.me</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
};

export default App;
