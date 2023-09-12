import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2">
          <button
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ background: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "green" }}
            onClick={() => setColor("green")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "blue" }}
            onClick={() => setColor("blue")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "pink" }}
            onClick={() => setColor("pink")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "gray" }}
            onClick={() => setColor("gray")}
          >
            Red
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
