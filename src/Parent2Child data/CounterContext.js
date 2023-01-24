import { createContext, useContext, useState } from 'react';

const CounterContext = createContext();

export default function CounterUsingContext() {
    const [counter, setCounter] = useState(0);

    return (
        <CounterContext.Provider value={ { counter, setCounter } }>
            <div>
                <Display />
                <Controls />
            </div>
        </CounterContext.Provider>
    );
}

function Display() {
    const { counter } = useContext(CounterContext);

    return <div>You clicked { counter } times</div>;
}

function Controls() {
    const { counter, setCounter } = useContext(CounterContext);

    const handleIncrement = () => {
        setCounter(counter + 1);
    }

    const handleDecrement = () => {
        setCounter(counter - 1);
    }

    return (
        <>
            <button onClick={ handleIncrement }>+</button>
            <button onClick={ handleDecrement }>-</button>
        </>
    );
}