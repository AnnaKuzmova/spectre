import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {teamAction} from '../../store/actions/teamActions';
import './Board.css';

const DashboardControls = () => {
    const dispatch = useDispatch()
    const board = useSelector(state => state.board.selectedBoard);
    const team = useSelector(state => state.team.currentUserTeam);
    useEffect(() => {
        dispatch(teamAction());
    },[])
    return (
       board && 
       <section className="dashboard-controls">
                <article>
                    <span><a href="/boards">Dashboard</a> &gt; <a href="/teams">{team && team.name} </a> &gt; {board && board.name}</span>
                    <h4>{board.name}</h4>
                </article>
                
       </section>
    );
}

export default DashboardControls;