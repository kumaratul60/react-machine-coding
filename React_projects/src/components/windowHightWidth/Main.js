import React from "react";
import useWindowSize from "./useWindowSize";

const WindowComponent = () => {
  const { width, height } = useWindowSize();

  return (
    <div>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
};

export default WindowComponent;
