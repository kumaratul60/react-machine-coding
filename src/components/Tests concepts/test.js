const { useState } = require("react");

const Component = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h4>Count: {count}</h4>
      <button
        onClick={() => {
          setCount(count + 10);
          setCount(count + 10);
        }}
      >
        Click me
      </button>
    </div>
  );
};

const App1 = () => {
  const [state, setState] = useState(0);
  if (state === 5) {
    return (
      <div className="App">
        <h4>Yayy!!</h4>
        <Component />
        <button onClick={() => setState((s) => s + 1)}>Rerender</button>
      </div>
    );
  }
  return (
    <div className="App">
      <Component />
      <button onClick={() => setState((s) => s + 1)}>Rerender</button>
    </div>
  );
};
export default App1;
