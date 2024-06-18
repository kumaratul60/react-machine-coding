import { useState } from "react";

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

  // Function to generate a random hex color and set it using setColor
  const getRandomColor = () => {
    // String containing all possible hex digits
    const letters = "0123456789ABCDEF";

    // Initialize the color string with the hash symbol
    let color = "#";

    // Loop 6 times to generate the 6 hex digits of the color code
    for (let i = 0; i < 6; i++) {
      // Generate a random number between 0 and 15
      // Use this random number to select a character from the letters string
      // Append the selected character to the color string
      color += letters[Math.floor(Math.random() * letters?.length)];
    }

    // Set the generated color using the setColor function
    setColor(color);
  };

  const handleClick = () => {
    getRandomColor();
  };

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed inset-x-0 flex-wrap justify-center px-2 bottom-12">
        <div className="flex flex-wrap justify-center gap-3 px-3 py-2 bg-white shadow-lg rounded-3xl">
          <button
            className="px-5 py-2 text-right text-white rounded-full shadow-lg outline-none"
            style={{ background: `${color}` }}
            onClick={handleClick}
          >
            Click to change
          </button>

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
            Green
          </button>
          <button
            className="px-4 py-1 text-white rounded-full shadow-lg outline-none"
            style={{ background: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="px-4 py-1 text-white rounded-full shadow-lg outline-none"
            style={{ background: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="px-4 py-1 text-white rounded-full shadow-lg outline-none"
            style={{ background: "pink" }}
            onClick={() => setColor("pink")}
          >
            Pink
          </button>
          <button
            className="px-4 py-1 text-white rounded-full shadow-lg outline-none"
            style={{ background: "gray" }}
            onClick={() => setColor("gray")}
          >
            Gray
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
