import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { teamAction } from '../../store/actions/teamActions';
import { getReportCommentsAction, getReportTicketsAction } from '../../store/actions/reportActions';
import { Bar } from 'react-chartjs-2';
import Chart from './Chart';

const Reports = () => {
    const dispatch = useDispatch();
    const commentsError = useSelector(state => state.report.commentsError);
    const ticketsError = useSelector(state => state.report.ticketsError);
    const team = useSelector(state => state.team.currentUserTeam);
    useEffect(() => {
        dispatch(teamAction());
        dispatch(getReportCommentsAction());
        dispatch(getReportTicketsAction())
    }, [])
    return (
        (commentsError && ticketsError) ? (<p className="error-message">Could not load resources from the server. Please try visiitng later.</p>) : (
            <div className="container">
                <h4>Reports:</h4>
                {team && <Chart team={team}/>}
            </div>
        )
     
    );
}

export default Reports;