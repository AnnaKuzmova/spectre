import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { closeDeleteTeamModal } from '../../store/actions/teamActions';
import { deleteTeamAction } from '../../store/actions/teamActions';

const DeleteTeamModal = () => {
    const team = useSelector(state => state.team.currentUserTeam);
    const deleteError = useSelector(state => state.team.deleteTeamError);
    const dispatch = useDispatch();
    return (
        <section id="delete-modal-bg">
            <div className="delete-modal-content">
                <h4 className="warning-heading"><i className="fas fa-exclamation-triangle"></i> Warning!</h4>
                <p className="warning-text">Are you sure you want to delete this team?</p>
                <p className="error-message">{deleteError}</p>
                <div className="flex">
                    <button onClick={()=>{dispatch(closeDeleteTeamModal())}} className="btn green darken-1">No,keep it</button>
                    <button onClick={() => {dispatch(deleteTeamAction(team.id))}} className="btn red lighten-1">Yes, delete it</button>
                </div>
            </div>
        </section>
    )
}

export default DeleteTeamModal;