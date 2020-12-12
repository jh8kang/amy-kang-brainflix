import './Comment.scss';

function Comment(props) {
    return (
        <div className="comment">
            <img className="comment__img"></img>
            <div className="comment__data">
                <p className="comment__data-name">{props.name}</p>
                <p className="comment__data-comment">{props.comment}</p>
            </div>
        </div>
    )
}

export default Comment