/*
Create a React component that accepts an "input" prop. If the "input" prop is falsy, render a live-updating date and time that updates every second. If the "input" prop is an array, render the array's elements in a list. If the "input" prop is anything else, render the value in a?
*/
import React, { useEffect, useState } from "react";

const MyComponent = ({ input }) => {
  // If the input is falsy (null, undefined, or false), render a live-updating date and time
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!input) {
    return <p>The current date and time is:<i> {date.toString()}</i></p>;
  }

  // If the input is an array, render the array's elements in a list
  if (Array.isArray(input)) {
    return (
      <ul>
        {input.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }

  // If the input is anything else, render the value as a string
  return <p>{input.toString()}</p>;
};

export default MyComponent;
