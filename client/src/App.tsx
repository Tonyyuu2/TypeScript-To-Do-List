import React from "react";
import "./App.css";
import { InputField } from "./components/InputField";

const App: React.FC = () => {
  return (
    <div className="Body">
      <span className="heading">task.me</span>
      <InputField />
    </div>
  );
};

export default App;
