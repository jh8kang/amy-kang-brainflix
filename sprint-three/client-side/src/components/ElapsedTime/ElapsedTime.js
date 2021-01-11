import React from 'react'

// elapsedTime returns the time interval between start and stop button 
function elapsedTime(props) {
    let elapsed = 0;
    for(let i = 0; i < props.timingEvents.length; i+=2) {
        const start = props.timingEvents[i];
        const stop = props.timingEvents[i + 1] || new Date()
        elapsed += stop-start
    }
    let timePassed = (elapsed/1000).toFixed(0)
    if (timePassed.toString().length === 1) {
        return `0${timePassed} / ${props.currentVideo.duration}`
    } 
    return `${timePassed} / ${props.currentVideo.duration}`
}

export default function ElapsedTime(props) {
    return (
        <div className="video__scrubby-time">
            {elapsedTime(props)}
        </div>
    )
}
