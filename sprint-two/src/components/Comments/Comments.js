import React from 'react';
import './Comments.scss';
import Comment from '../Comment/Comment';
import CommentForm from '../CommentForm/CommentForm';
// import { v4 as uuid } from 'uuid';

function Comments({currentVideo}){
        return (
            <div className="comments">
                <h2 className="comments__title">3 Comments</h2>
                <CommentForm />
                {currentVideo.comments.map((comment)=><Comment key={comment.id} name={comment.name} timestamp={comment.timestamp} comment={comment.comment}/>)}
            </div>
        )
    
}

export default Comments