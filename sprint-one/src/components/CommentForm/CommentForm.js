import './CommentForm.scss';
import profile from '../../assets/Images/Mohan-muruge.jpg';

function CommentForm() {
    return (
        <div className="comment-form">
            <div className="comment-form__profile"></div>
            <div className="comment-form__input">
                <label for="commentInput" className="comment-form__input-label">JOIN THE CONVERSATION</label>
                <div className="comment-form__input-box">
                    <textarea className="comment-form__input-box-comment" id="commentInput" name="commentInput" placeholder="That was easily the most spectacular BMX moment ever."></textarea>
                    <button className="comment-form__input-box-button">COMMENT</button>
                </div>
                
            </div>
        </div>
    )
}

export default CommentForm