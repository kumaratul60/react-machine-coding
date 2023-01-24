import { useState } from "react";

export default function CounterShare() {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <Display counter={ counter } />
            <Controls setCounter={ setCounter } counter={ counter } />
        </div>
    );
}

function Display({ counter }) {
    return <div>You clicked { counter } times</div>;
}

function Controls({ setCounter, counter }) {
    const handleIncrement = () => {
        setCounter(counter + 1);
    };

    const handleDecrement = () => {
        setCounter(counter - 1);
    };

    return (
        <>
            <button onClick={ handleIncrement }>+</button>
            <button onClick={ handleDecrement }>-</button>
        </>
    );
}
