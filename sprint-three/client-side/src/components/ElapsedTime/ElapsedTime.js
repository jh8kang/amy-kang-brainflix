import React from 'react'

function elapsedTime(events) {
    let elapsed = 0;
    for(let i = 0; i < events.length; i+=2) {
        const start = events[i];
        const stop = events[i + 1] || new Date()
        elapsed += stop-start
    }
    let timePassed = (elapsed/1000).toFixed(0)
    if (timePassed.toString().length === 1) {
        return `0${timePassed} / 0:42`
    } 
    return `${timePassed} / 0:42`
}

export default function ElapsedTime(props) {
    return (
        <div className="video__scrubby-time">
            {elapsedTime(props.timingEvents)}
        </div>
    )
}
