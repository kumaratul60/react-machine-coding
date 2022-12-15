import React, { useState } from "react";
import "./Markdown.css";

const MarkDown = () => {
  //   const [markdownText, setMarkdownText] = useState("");
  const [markdownElement, setMarkdownElement] = useState([]);

  const defaultStyle = {
    element: "p",
  };

  const markdownElementStyles = {
    "###": {
      element: "h3",
      type: "open",
    },
    "##": {
      element: "h2",
      type: "open",
    },
    "#": {
      element: "h1",
      type: "open",
    },
    "*": {
      element: "em",
      type: "pair",
    },
  };
  const convertMarkdownTextToElements = (markdownText) => {
    const linesToConvert = markdownText.split(/\r?\n/);
    // console.log(linesToConvert);
    const newMarkdownElements = [];

    linesToConvert.forEach((line) => {
      let elementStyle = { ...defaultStyle };
      let lineWithStyle = line;
      //  if ### text
      if (markdownElementStyles[line.slice(0, 3)]) {
        elementStyle = markdownElementStyles[line.slice(0, 3)];
        lineWithStyle = line.split(line.slice(0, 3))[1];
      } else if (markdownElementStyles[line.slice(0, 2)]) {
        elementStyle = markdownElementStyles[line.slice(0, 2)];
        lineWithStyle = line.split(line.slice(0, 2))[1];
      } else if (markdownElementStyles[line.slice(0, 1)]) {
        const currentStyle = markdownElementStyles[line.slice(0, 1)];
        if (currentStyle.type === "pair") {
          if (line.charAt(0) === line.charAt(line.length - 1)) {
            elementStyle = currentStyle;
            lineWithStyle = line.split(line.slice(0, 1)[1]);
          }
        } else {
          elementStyle = markdownElementStyles[line.slice(0, 1)];
          lineWithStyle = line.split(line.slice(0, 1))[1];
        }
      }
      newMarkdownElements.push(
        React.createElement(elementStyle.element, {}, lineWithStyle)
      );
    });
    setMarkdownElement(newMarkdownElements);
  };

  return (
    <div className="markdownText">
      <h2>MarkDown</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          //   convertMarkdownTextToElements();
        }}
      >
        <textarea
          name=""
          id="markdownText"
          cols="30"
          rows="10"
          onChange={
            // (e) => setMarkdownText(e.target.value)
            (e) => convertMarkdownTextToElements(e.target.value)
          }
        ></textarea>
        <input type="submit" />
      </form>

      <h3>Markdown output</h3>
      {markdownElement}
    </div>
  );
};

export default MarkDown;
