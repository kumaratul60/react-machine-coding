import { useState, useEffect } from "react";

export default function InputChar() {
    const [input, setInput] = useState("");
    const [displayInput, setDisplayInput] = useState("");

    // useEffect(() => {
    //     let index = 0;
    //     const printChar = () => {
    //         setDisplayInput(input.slice(0, index));
    //         index++;
    //         if (index <= input.length) {
    //             setTimeout(printChar, 500);
    //         }
    //     };

    //     printChar();
    // }, [input]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (input.length === displayInput.length) {
                clearInterval(interval);
                return;
            }
            setDisplayInput(input.slice(0, displayInput.length + 1));
        }, 600);
        return () => clearInterval(interval);
    }, [input, displayInput]);

    return (
        <>
            <input
                type="text"
                placeholder="type some text"
                onChange={ (e) => {
                    setInput(e.target.value);
                } }
            />
            <p>{ displayInput }</p>
        </>
    );
}