import './Comment.scss';

function realTime (timestamp) {
    let time = new Date(timestamp)
    let timeString = time.toLocaleString();
    let justDate = timeString.slice(0, 10)
    return justDate;
}

// Comment component takes in props and returns JXN for a single comment 
function Comment({name, timestamp, comment, id}) {

    let newTime = realTime(timestamp)
    // console.log(newTime)
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