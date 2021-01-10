import React from 'react'

function elapsedTime() {
    return '0:00 / 0:42'
}

export default function ElapsedTime(props) {
    return (
        <div className="video__scrubby-time">
            {elapsedTime()}
        </div>
    )
}
