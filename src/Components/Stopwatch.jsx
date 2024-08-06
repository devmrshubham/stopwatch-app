import React, { useState } from "react";

const Stopwatch = () => {
    const [time, setTime] = useState({ hr: 0, min: 0, sec: 0, milli: 0, });
    const [status, setStatus] = useState()

    let updHr = time.hr
    let updMin = time.min
    let updSec = time.sec
    let updMilli = time.milli

    const start = () => {
        myfucs();
        setStatus(setInterval(myfucs, 10))
    }

    const myfucs = () => {
        if (updMilli === 100) {
            updMilli = 0
            updSec++
        }

        if (updSec === 60) {
            updSec = 0
            updMin++
        }

        if (updMin === 60) {
            updMin = 0
            updHr++
        }

        updMilli++
        return setTime({ hr: updHr, min: updMin, sec: updSec, milli: updMilli, })
    }

    const stop = () => {
        clearInterval(status)

    }

    const reset = () => {
        clearInterval(status)
        setTime({ hr: 0, min: 0, sec: 0, milli: 0, })
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 ">
                        
                        <h1>{time.hr + " : " + time.min + " : " + time.sec + " : " + time.milli} </h1>
                        <br />


                        <div className="buttons">
                            <button className="btn btn-primary" onClick={() => start()}>start</button>
                            <button className="btn btn-danger" onClick={() => stop()}>stop</button>
                            <button className="btn btn-warning" onClick={() => reset()}>reset</button>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
};

export default Stopwatch;
