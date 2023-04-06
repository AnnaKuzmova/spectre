import React from 'react';
import { openDeleteTeamModal, openTeamViwModal } from '../../store/actions/teamActions';
import { useDispatch } from 'react-redux';

const TeamList = ({teams, setTeamId}) => {
    const dispatch = useDispatch();
    const handleClickEvent = (e) => {
        e.preventDefault();
        dispatch(openTeamViwModal());
    }

    return (
        <article className="team-container">
                 {teams ? (
                    <article className="team-card" key={teams.id}>
                      <h5>{teams.emoji} {teams.name}</h5>
                      <span className="team-additional-info">
                          Team memebers: {teams.users.length}
                      </span>
                      <span className="team-additional-info">
                          Created at: {teams.createdAt}
                      </span>
                      <div className="flex">
                        <button onClick={()=>{dispatch(openDeleteTeamModal())}} className="delete-team-btn">delete team</button>
                        <button onClick={handleClickEvent} team={teams.id} className="waves-effect waves-light btn deep-purple darken-2">view team</button>
                      </div>  
                  </article>
                 ): (
                     <p>You are not in a team yet.</p>
                 )}
        </article>
    )
}

export default TeamList;