import React from 'react';
import TeamMember from './TeamMember';
import { useDispatch, useSelector } from 'react-redux';
import { closeTeamViewModal,leaveTeamAction } from '../../store/actions/teamActions';
import AddMemberForm from './AddMemberForm';

const ViewTeamModal = () => {
    const dispatch = useDispatch();
    const team = useSelector(state => state.team.currentUserTeam);
    const leaveTeamError = useSelector(state => state.team.leaveTeamError);
    const leaveTeamEvent = () => {
      dispatch(leaveTeamAction(team))
    }
    return (
        <section id="modal">
          {team && (
            <article className="team-card">
                      <h5>{team.emoji} {team.name} - <span className="team-additional-info">Created at: {team.createdAt}</span></h5>
                        <div className="member-list">
                            <p>Members:</p>
                            {team.users.map(id => (
                                <TeamMember userId={id} />
                            ))}
                        </div>
                        <p className="add-member-text">Add members:</p>
                        <AddMemberForm />
                        {leaveTeamError && <p className="error-message">{leaveTeamError}</p>}
                      <div className="flex">
                        <button onClick={()=>{dispatch(closeTeamViewModal())}} className="btn deep-orange accent-2">Close</button>
                        <button onClick={leaveTeamEvent} className="btn teal lighten-1">leave team</button>
                      </div>
                  </article>
          )}
           </section>
    )
}

export default ViewTeamModal;