import React from "react";
import './styles.css'

export const InputField = () => {
  return (
    <form className="input">
      <input type="input" placeholder="Add a task..." className="input__box" />
      <button className="input__submit" type="submit">GO</button>
    </form>
  );
};
