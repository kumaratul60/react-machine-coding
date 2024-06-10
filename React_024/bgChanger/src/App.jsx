import { useEffect, useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  // useEffect(() => {
  //   let timer = setTimeout(() => {
  //     getRandomColor();
  //   }, 2000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [color]);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++)
      color += letters[Math.floor(Math.random() * 16)];
    setColor(color);
  };

  const handleClick = () => {
    getRandomColor();
  };

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed inset-x-0 flex-wrap justify-center px-2 bottom-12">
        <div className="flex flex-wrap justify-center gap-3 px-3 py-2 bg-white shadow-lg rounded-3xl">
          <button
            className="px-4 py-2 text-white rounded-full shadow-lg outline-none"
            style={{ background: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="px-4 py-1 text-white rounded-full shadow-lg outline-none"
            style={{ background: "green" }}
            onClick={() => setColor("green")}
          >
            Red
          </button>
          <button
            className="px-4 py-1 text-white rounded-full shadow-lg outline-none"
            style={{ background: "blue" }}
            onClick={() => setColor("blue")}
          >
            Red
          </button>
          <button
            className="px-4 py-1 text-white rounded-full shadow-lg outline-none"
            style={{ background: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            Red
          </button>
          <button
            className="px-4 py-1 text-white rounded-full shadow-lg outline-none"
            style={{ background: "pink" }}
            onClick={() => setColor("pink")}
          >
            Red
          </button>
          <button
            className="px-4 py-1 text-white rounded-full shadow-lg outline-none"
            style={{ background: "gray" }}
            onClick={() => setColor("gray")}
          >
            Gray
          </button>

          <button
            className="px-5 py-2 text-right text-white rounded-full shadow-lg outline-none"
            style={{ background: "black" }}
            onClick={handleClick}
          >
            Click to change
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
