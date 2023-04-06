import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addCommentAction} from '../../store/actions/boardActions';

const AddComment = ({ticket}) => {
    const board = useSelector(state => state.board.selectedBoard);
    const error = useSelector(state => state.board.addCommentError);
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
       e.preventDefault();
      dispatch(addCommentAction(e.target["comment"].value, board.id,ticket));
    }
    return (
        <form className="add-comment-form" onSubmit={handleSubmit}>
            <input type="text" name="comment" placeholder="Enter Your Comment.." required />
            <p className="error-message">{error}</p>
        </form>
    );
}

export default AddComment;