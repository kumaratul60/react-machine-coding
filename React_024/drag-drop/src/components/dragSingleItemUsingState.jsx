import { useState, useEffect } from "react";

function DragSingleItemState() {
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [initialX, setInitialX] = useState(0);
  const [initialY, setInitialY] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setInitialX(e.clientX - left);
    setInitialY(e.clientY - top);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newLeft = e.clientX - initialX;
      const newTop = e.clientY - initialY;
      setLeft(newLeft);
      setTop(newTop);
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      onMouseDown={handleMouseDown}
      style={{ left: left, top: top, position: "absolute", cursor: "pointer" }}
    >
      Drag me state
    </div>
  );
}

export default DragSingleItemState;
