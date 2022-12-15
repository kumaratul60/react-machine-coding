import React from "react";
import explorer from "./Data/data";
import Folder from "./folder";
// import "./styles.css"

const FolderApp = () => {
  return (
    <div className="folder">
      <h4>Implement Folder structure logic in React</h4>
      <Folder explorer={explorer} />
    </div>
  );
};

export default FolderApp;
