import { useState } from "react";

const Child = ({ value }) => {
  const [state, setState] = useState(value);
  return <h1>{state}</h1>;
};

const App3 = () => {
  const [state, setState] = useState(10);
  return (
    <>
      <Child value={state} />
      <button
        onClick={() => {
          setState(state + 10);
          setState(state + 10);
        }}
      >
        Click Me
      </button>
    </>
  );
};
export default App3;
