import React from "react";
import filesJson from "./data";
import Parent from "./Parent";
import "./style.css";

const MainNested = () => {
  return (
    <div className="main">
      <h1>Print Nested Directory Structure!</h1>
      <p>Start editing to see some magic happen :</p>
      {filesJson.map(({ name, children }) => (
        <Parent name={name} children={children} />
      ))}
    </div>
  );
};

export default MainNested;
