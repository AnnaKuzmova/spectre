import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {deleteCommentAction} from '../../store/actions/boardActions';

const Comment = ({comment}) => {
    const dispatch = useDispatch();
    const error = useSelector(state => state.board.deleteCommentError);
    return (
        <article className="comment">
            <div className="flex">
                <p>{comment.content}</p>
                <p>{error}</p>
                {comment.userId === localStorage.getItem("logged_user") && <button onClick={() =>dispatch(deleteCommentAction(comment.id))} ><i className="fas fa-trash"></i></button>}
            </div>
        </article>
    );
}

export default Comment;