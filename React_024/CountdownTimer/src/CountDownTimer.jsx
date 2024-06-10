import  { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const [initialTime, setInitialTime] = useState(0); // Initial time in seconds
    const [time, setTime] = useState(initialTime);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        let intervalId;

        if (isActive && !isPaused && time > 0) {
            intervalId = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);
        } else if (!isActive && !isPaused && time !== initialTime) {
            setTime(initialTime);
        }

        return () => clearInterval(intervalId);
    }, [isActive, isPaused, time, initialTime]);

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const handlePause = () => {
        setIsActive(false);
        setIsPaused(true);
    };


    const handleReset = () => {
        setInitialTime(0);
        setTime(0);
        setIsActive(false);
        setIsPaused(false);
    };

    const handleChange = (event) => {
        const newTime = parseInt(event.target.value);
        if (!isNaN(newTime) && newTime >= 0) {
            setInitialTime(newTime);
            setTime(newTime);
        }
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <div>
            <h1>Countdown Timer</h1>
            <div style={{ fontSize: '2em' }}>{formatTime(time)}</div>
            <div>
                <input type="number" value={initialTime} onChange={handleChange} />
                <button onClick={handleStart} disabled={isActive}>Start</button>
                <button onClick={handlePause} disabled={!isActive}>Pause</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};

export default CountdownTimer;
