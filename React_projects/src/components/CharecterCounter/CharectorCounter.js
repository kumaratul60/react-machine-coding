import React, { useState } from "react";
import "./style.css";

const CharacterCounter = () => {
  let [input, setInput] = useState("");

  function inputHandler(event) {
    setInput(event.target.value);
  }

  return (
    <div className="characterCounter">
      <textarea onChange={inputHandler}></textarea>

      <div>total characters: {input.length}</div>
      <div>Remaining characters: {500 - input.length}</div>
    </div>
  );
};

export default CharacterCounter;
