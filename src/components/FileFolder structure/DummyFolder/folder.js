import { useState } from "react";

function Folder({ explorer }) {
  const [expand, setExpand] = useState(false);

  if (explorer.isFolder) {
    return (
      <>
        <span onClick={() => setExpand(true)}>
          {explorer.name}
          <br />
        </span>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 15 }}>
          {explorer.item.map((exp) => {
            return <Folder key={exp.name} explorer={exp} />;
          })}
        </div>
      </>
    );
  } else {
    return (
      <span>
        {explorer.name}
        <br />
      </span>
    );
  }
}
export default Folder;
