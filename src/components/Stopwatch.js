import { useState, useEffect } from "react";

const Stopwatch = (props) => {

    // const [timeLeft, setTimeLeft] = useState(0);

    const [seconds, setSeconds] = useState(0);

    const [intervalId, setIntervalId] = useState(0);

    const [hrs, setHrs] = useState(0);
    const [mins, setMins] = useState(0);
    const [secs, setSecs] = useState(0);

    useEffect( () => {
        setSeconds(props.turnLength * 60);
    }, []);

    useEffect( () => {
        setHrs(Math.floor(seconds / 3600));
        setMins(Math.floor( (seconds - (hrs*3600)) / 60 ));
        setSecs(seconds % 60);
    }, [seconds]);


    // if (secs < 10) {
    //     secs = `0` + secs;
    // };

    // if (mins < 10) {
    //     mins = `0` + mins;
    // };

    // if (hrs < 10) {
    //     hrs = `0` + hrs;
    // };

    //state - 
    //seconds
    //start clicked, pause clicked, reset clicked

    // const counter = () => {
    //     setSeconds( (prevSeconds) => {
    //         console.log('counting');
    //         return prevSeconds - 1;
    //     });
    // };

    const handleStart = () => {

        if (intervalId) {
            return;
        }

        const newIntervalId = setInterval( () => {
            setSeconds( (prevSeconds) => {
                console.log('counting down');
                return (prevSeconds - 1);
            })
        }, 1000);
        setIntervalId(newIntervalId);
    };

    const handlePause = () => {
        clearInterval(intervalId);
        setIntervalId(0);
    };

    const handleReset = () => {
        console.log('resetttteded');
    };

    return(
        <div className="watch wrapper">
            <div className="stopwatchDisplay">
                <p>{`${hrs}:${mins}:${secs}`}</p>
            </div>

            <div className="controls">
                <button id="start" onClick={handleStart}>Start</button>
                <button id="pause" onClick={handlePause}>Pause</button>
                <button id="reset" onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
}

export default Stopwatch;