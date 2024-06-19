import { useEffect, useState } from "react";
import { useReducer } from "react";

function boxReducer(state, action) {
  switch (action.type) {
    case "MOVE":
      return {
        ...state,
        left: action.payload.left,
        top: action.payload.top,
      };
    default:
      return state;
  }
}

function DragSingleItem() {
  const [boxState, dispatch] = useReducer(boxReducer, { left: 0, top: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [initialX, setInitialX] = useState(0);
  const [initialY, setInitialY] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(!isDragging);
    setInitialX(e.clientX - boxState.left);
    setInitialY(e.clientY - boxState.top);
  };

  const handleMouseUp = () => {
    setIsDragging(isDragging);
  };

  const handleMouseMove = (e) => {
    // console.log(e.clientX);
    if (isDragging) {
      const left = e.clientX - initialX; // horizontal position
      const top = e.clientY - initialY; // vertical position
      dispatch({ type: "MOVE", payload: { left, top } });
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

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      onMouseDown={handleMouseDown}
      //   onMouseMove={handleMouseMove}
      //   onMouseUp={handleMouseUp}
      style={{ left: boxState.left, top: boxState.top, position: "absolute", cursor: "pointer" }}
    >
      Drag me Reducer
    </div>
  );
}

export default DragSingleItem;
