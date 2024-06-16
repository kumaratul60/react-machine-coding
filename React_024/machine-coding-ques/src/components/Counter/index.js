import React, { useCallback, useEffect, useRef, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Cleanup on component unmount
    return () => clearInterval(intervalRef.current);
  }, []);

  // const handleStart = () => {
  //   if (!isRunning) {
  //     setIsRunning(true);
  //     intervalRef.current = setInterval(() => {
  //       setCount((prev) => prev + 1);
  //     }, 1000);
  //   }
  // };

  const handleStart = useCallback(() => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }
  }, [isRunning]);

  const handlePause = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setCount(0);
  };

  return (
    <div>
      <p> {count}</p>
      <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>
      <button onClick={handlePause} disabled={!isRunning}>
        Pause
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
