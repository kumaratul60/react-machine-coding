import { useEffect, useState } from "react";
import "./Lights.css";

const direction = ["north", "west", "south", "east"];

const TrafficLights = () => {
  const [colorState, setColor] = useState(direction[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setColor(direction[index]);
      setIndex((index) => (index + 1) % direction.length);
    }, 2000);
  }, [index]);

  return (
    <div className="App">
      <div className="main-box">
        <div className="box">
          <span>North</span>
          <div
            className="north-red"
            style={{
              backgroundColor: colorState === "north" ? "#B71C1C" : "#F44336",
            }}
          ></div>
          <div
            className="north-green"
            style={{
              backgroundColor: colorState === "north" ? "#00E676" : "#1B5E20",
            }}
          ></div>
        </div>
        <div className="box">
          <span>West</span>
          <div
            className="west-red"
            style={{
              backgroundColor: colorState === "west" ? "#B71C1C" : "#F44336",
            }}
          ></div>
          <div
            className="west-green"
            style={{
              backgroundColor: colorState === "west" ? "#00E676" : "#1B5E20",
            }}
          ></div>
        </div>
        <div className="box">
          <span>South</span>
          <div
            className="south-red"
            style={{
              backgroundColor: colorState === "south" ? "#B71C1C" : "#F44336",
            }}
          ></div>
          <div
            className="south-green"
            style={{
              backgroundColor: colorState === "south" ? "#00E676" : "#1B5E20",
            }}
          ></div>
        </div>
        <div className="box">
          <span>East</span>
          <div
            className="east-red"
            style={{
              backgroundColor: colorState === "east" ? "#B71C1C" : "#F44336",
            }}
          ></div>
          <div
            className="east-green"
            style={{
              backgroundColor: colorState === "east" ? "#00E676" : "#1B5E20",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TrafficLights;
