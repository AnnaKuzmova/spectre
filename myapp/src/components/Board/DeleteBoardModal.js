import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeDeleteBoardModal, deleteBoardAction } from '../../store/actions/boardActions';

const DeleteBoardModal = ({boardId}) => {
    const dispatch = useDispatch();
    return (
        <section id="delete-board-modal-bg">
            <div className="delete-modal-content">
                <h4 className="warning-heading"><i className="fas fa-exclamation-triangle"></i> Warning!</h4>
                <p className="warning-text">Are you sure you want to delete this board?</p>
                <span>Deleting this board will automatically delete its related data</span>
                <div className="flex">
                    <button onClick={()=>{dispatch(deleteBoardAction(boardId))}} className="btn green darken-1">Yes</button>
                    <button onClick={()=> {dispatch(closeDeleteBoardModal())}} className="btn red lighten-1">No</button>
                </div>
            </div>
        </section>
    );
}

export default DeleteBoardModal;