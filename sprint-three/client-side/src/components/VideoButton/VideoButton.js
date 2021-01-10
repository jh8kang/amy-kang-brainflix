import React from 'react'
import play from '../../assets/Icons/SVG/play.svg';
import pause from '../../assets/Icons/SVG/pause.svg';

function toggleButton(events) {
    const buttontype = events.length % 2 === 0
    ? <img alt="play button" className ="video__play-btn"src={play}></img>
    : <img alt="play button" className ="video__play-btn"src={pause}></img>

    return buttontype
}

export default function VideoButton(props) {

    return (
            <button onClick={props.addTimerEvent} className ="video__play" id="play">
                {toggleButton(props.timingEvents)}
            </button>
    )
}
