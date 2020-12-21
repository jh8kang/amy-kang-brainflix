import './CommentForm.scss';

function CommentForm({currentVideo, submitHandler}) {
    // console.log(currentVideo.id)
    return (
        <form className="comment-form" onSubmit={(e)=>submitHandler(e, currentVideo.id)}>
            <div className="comment-form__profile"></div>
            <div className="comment-form__input">
                <label htmlFor="commentInput" className="comment-form__input-label">JOIN THE CONVERSATION</label>
                <div className="comment-form__input-box">
                    <textarea className="comment-form__input-box-comment" id="commentInput" name="commentInput" placeholder="Place comment here"></textarea>
                    <button type="submit" className="comment-form__input-box-button">COMMENT</button>
                </div>
                
            </div>
        </form>
    )
}

export default CommentForm