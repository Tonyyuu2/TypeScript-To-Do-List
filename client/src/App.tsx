import React, { useState } from "react";
import "./App.css";
import { InputField } from "./components/InputField";
import { TodoList } from "./components/TodoList";
import { Todo } from "./model";

//steps:
// when saving a todo, it should save onto active task
// - two individual states (active vs completed)
// - send both states to TodoList so that it can be sent from one place to another
// Create back feature

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [active, setActive] = useState<Todo[]>([]);
  const [complete, setComplete] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (todo) {
      setActive((prev) => [...prev, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="Body">
      <span className="heading">task.me</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList
        active={active}
        setActive={setActive}
        complete={complete}
        setComplete={setComplete}
      />
    </div>
  );
};

export default App;
