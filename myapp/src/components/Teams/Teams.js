import React, {useState, useEffect} from 'react';
import TeamList from './TeamList';
import './Teams.css';
import { Link } from 'react-router-dom';
import ViewTeamModal from './ViewTeamModal';
import {teamAction} from '../../store/actions/teamActions';
import {useDispatch, useSelector} from 'react-redux';
import DeleteTeamModal from './DeleteTeamModal';

const Teams = () => {
    const dispatch = useDispatch();
    const teamViewModal = useSelector(state => state.team.teamViewModal);
    const teamDeleteModal = useSelector(state => state.team.teamDeleteModal);
    const teams = useSelector(state => state.team.currentUserTeam);
    const [viewTeamId, setViewTeamId] = useState(null);
    useEffect(() => {
        dispatch(teamAction());
    }, []);
    return (
        <div className="container">
           <section className="flex">
               <h4>My Teams</h4>
               <button className="waves-effect waves-light btn"><Link to="/teams/create">Create Team</Link></button>
           </section>
           <section className="list-of-teams">
            {teams && <TeamList setTeamId={setViewTeamId} teams={teams} />}
           </section>
           {teamViewModal && <ViewTeamModal />}
           {teamDeleteModal && <DeleteTeamModal />}
        </div>
    );
}

export default Teams;