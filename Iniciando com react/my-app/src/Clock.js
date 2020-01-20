import React, { useState, useEffect } from 'react';

function Clock() {
    const [date, setDate] = useState(
        new Date())
    useEffect(() => {
        let timerID = setInterval(() => {
            tick()
        }, 1000);

        return () => {
            clearInterval(timerID);
        };
    }

    );
    const tick = () => {
        setDate(new Date())
    }
    return (
        <h1>
            Hello, it is {date.toLocaleString()}
        </h1>
    );

}

export default Clock;