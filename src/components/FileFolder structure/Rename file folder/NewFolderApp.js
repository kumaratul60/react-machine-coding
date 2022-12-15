import React, { useState } from "react";
import useTraverseTree from "./hooks/useTree-traversal";
import NewFolder from "./newFolder";
import explorer from "./Data/dataJson";
import "./style.css";

const NewFolderApp = () => {
  const [explorerData, setExplorerData] = useState(explorer);

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  return (
    <div className="newAppFolder">
      <NewFolder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
};

export default NewFolderApp;
