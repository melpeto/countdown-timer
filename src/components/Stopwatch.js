import { useState, useEffect } from "react";

const Stopwatch = (props) => {

    const [seconds, setSeconds] = useState(0);

    const [isStarted, setIsStared] = useState(false);
    // const seconds = props.turnLength * 60;

    // let hrs = Math.floor(seconds / 3600);
    // let mins = Math.floor( (seconds - (hrs*3600)) / 60 );
    // // const mins = Math.floor(seconds / 60);
    // let secs = seconds % 60;

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

    useEffect( () => {
        const interval = setInterval(timer, 1000);
        return () => clearInterval(interval);
    }, [isStarted]);

    const timer = () => {
        setSeconds( (prevSeconds) => {
            return prevSeconds - 1;
        })
    }

    const handleStart = () => {
        console.log('started');
        //setIsStarted
    };

    const handlePause = () => {
        console.log('paused');
        //setIsPaused
    };

    const handleReset = () => {
        console.log('resetttteded');
        //setIsReset
    }

    return(
        <div className="watch wrapper">
            <div className="stopwatchDisplay">
                {/* <p>{`${hrs}:${mins}:${secs}`}</p> */}
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