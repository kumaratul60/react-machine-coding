import { useState, useEffect } from "react";
import "./input.css";

export default function InputChar() {
  const [input, setInput] = useState("");
  const [displayInput, setDisplayInput] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (input.length === displayInput.length) {
        clearInterval(interval);
        displayedInput(input);
        return;
      }
      setDisplayInput(input.slice(0, displayInput.length + 1));
    }, 300);
    return () => clearInterval(interval);
  }, [input, displayInput]);

  const displayedInput = (text) => {
    // Calculate the total number of characters, vowels, and consonants in the input
    const totalCharacters = text.length;
    const totalVowels = (text.match(/[aeiou]/gi) || []).length;
    const totalConsonants = totalCharacters - totalVowels;

    if (input !== "") {
      alert(
        `Total Characters: ${totalCharacters}\nTotal Vowels: ${totalVowels}\nTotal Consonants: ${totalConsonants}`
      );
    }
  };

  return (
    <div className="container">
      <div className="content">
        <input
          type="text"
          placeholder="type some text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        {input && <p className="display">{displayInput}</p>}
      </div>
    </div>
  );
}
