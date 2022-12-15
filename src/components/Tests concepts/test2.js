import { useRef } from "react";

const App2 = () => {
  const value = useRef(0);
  function add() {
    value.current += 1;
    console.log(value.current); // this shows that the number did increment
  }
  return (
    <>
      <h1>{value.current}</h1>
      <button
        onClick={() => {
          // value.current.value += 1;
          add();
        }}
      >
        Click Me
      </button>
    </>
  );
};
export default App2;
