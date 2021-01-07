import './Comment.scss';

// realTime takes in a number in millisec and returns a string with date 
function realTime (timestamp) {
    let time = new Date(timestamp)
    let timeString = time.toLocaleString();
    let readableDate = timeString.slice(0, 10)
    return readableDate;
}

// COMMENT Component returns a comment from MainVideo
function Comment({name, timestamp, comment, id}) {
    let newTime = realTime(timestamp)
    return (
        <div className="comment" key={id} >
            <div className="comment__img"></div>
            <div className="comment__data">
                <div className="comment__data-info">
                    <p className="comment__data-info-name">{name}</p>
                    <p className="comment__data-info-time">{newTime}</p>
                </div>
                <p className="comment__data-comment">{comment}</p>
            </div>
        </div>
    )
}

export default Comment