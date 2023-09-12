import React, { useState } from "react";
import Child from "./Child";
import "./Toggle.css";

const ToggleBox = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="toggleWrapper">
      <Child handleClick1={handleClick} />
      {toggle ? (
        <div className="box1-wrapper">
          <div className="box1"></div>
        </div>
      ) : (
        <div className="box1-wrapper">
          <div className="box"></div>
        </div>
      )}
    </div>
  );
};

export default ToggleBox;
