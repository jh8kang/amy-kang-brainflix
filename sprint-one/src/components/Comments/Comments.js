import React, {Component} from 'react';
import './Comments.scss';
import Comment from '../Comment/Comment';
import CommentForm from '../CommentForm/CommentForm';



class Comments extends Component {
    state = {
        commentsList: [
            {name: "Michael Lyons", comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."},
            {name: "Gaary Wong", comment: "Everytime I see him shred I feel so motivated to get off my couch and hop on my board. He's so talented! I wish I can ride like him one day so I can really enjoy myself!"},
            {name: "Theodore Duncan", comment: "How can someone be so good! You can tell he lives for this and loves to do it every day. Everytime I see him i feel instantly happy! He's definately my favorite ever!"}
        ]
    }

    render() {
        return (
            <div className="comments">
                <h2 className="comments__title">3 Comments</h2>
                <CommentForm />
                {this.state.commentsList.map((comment)=><Comment name={comment.name} comment={comment.comment}/>)}
            </div>
        )
    }
}

export default Comments