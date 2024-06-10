import { useCallback, useEffect, useRef, useState } from "react";
// import "./App.css";

function App() {
  const [length, setLength] = useState(0);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);
  const passwordGenerator = () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+=}{[]?.,<>`~|:;-";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  };

  const passwordGeneratorOp = useCallback(passwordGenerator, [
    numAllowed,
    charAllowed,
    length,
    setPassword,
  ]);

  useEffect(() => {
    passwordGeneratorOp();
  }, [length, numAllowed, charAllowed, passwordGeneratorOp]);

  const copyPasswordToClip = () => {
    // password.current?.select();
    // password.current?.setSelectionRange(0, 99);
    // window.navigator.clipboard.writeText(password);
    passwordRef.current.select();
    document.execCommand("copy");
  };

  return (
    <div className="w-full max-w-md px-4 py-3 mx-auto my-8 text-orange-500 bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-center text-white">Password Generator</h1>
      <div className="flex m-4 overflow-hidden rounded-lg shadow">
        <input
          type="text"
          className="w-full px-3 py-1 outline-none"
          placeholder="password"
          value={password}
          ref={passwordRef}
          readOnly
        />
        <button className="px-3 py-3 bg-blue-600" onClick={copyPasswordToClip}>
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label htmlFor="length">Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
