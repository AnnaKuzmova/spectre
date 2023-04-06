import React from 'react';
import { useSelector } from 'react-redux';
import AddComment from './AddComment';
import Comment from './Comment';


const CommentList = ({ticket}) => {
    const comments = useSelector(state => state.board.comments);
    return (
        <section className="comments-container">
            <AddComment ticket={ticket} />
            {comments.filter(comment => comment.ticketId === ticket).map(comment => (
                <Comment comment={comment} />
            ))}
        </section>
    );
}

export default CommentList;