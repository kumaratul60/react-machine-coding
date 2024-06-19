import  { useState, useEffect } from "react";

const dragData = [
  { id: 1, text: "Item 1" },
  { id: 2, text: "Item 2" },
  { id: 3, text: "Item 3" },
];

function DragMuiltipleItem() {
  const [items, setItems] = useState(dragData.map((item) => ({ ...item, left: 0, top: 0 })));
  const [isDragging, setIsDragging] = useState(false);
  const [draggingId, setDraggingId] = useState(null);
  const [initialX, setInitialX] = useState(0);
  const [initialY, setInitialY] = useState(0);

  const handleMouseDown = (id, e) => {
    setIsDragging(true);
    setDraggingId(id);
    const item = items.find((item) => item.id === id);
    setInitialX(e.clientX - item.left);
    setInitialY(e.clientY - item.top);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDraggingId(null);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const left = e.clientX - initialX;
      const top = e.clientY - initialY;
      setItems(items.map((item) => (item.id === draggingId ? { ...item, left, top } : item)));
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
    <div>
      {items.map((item) => (
        <div
          key={item.id}
          onMouseDown={(e) => handleMouseDown(item.id, e)}
          style={{
            left: item.left,
            top: item.top,
            position: "absolute",
            cursor: "pointer",
            padding: "8px",
            border: "1px solid black",
            backgroundColor: "lightgray",
            userSelect: "none",
          }}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
}

export default DragMuiltipleItem;
