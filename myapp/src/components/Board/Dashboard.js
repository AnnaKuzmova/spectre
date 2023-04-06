import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getSelectedBoardAction, getTicketsAction, getCommentsAction } from '../../store/actions/boardActions';
import DashboardControls from './DashboardControls';
import ColumnList from './ColumnList';
import './Board.css';


const Dashboard = () => {
    const dispatch = useDispatch(getCommentsAction());
    const board = useSelector(state => state.board.selectedBoard);
    const boardError = useSelector(state => state.board.selectedBoardError);
    const {id} = useParams();
    useEffect(() => {
        dispatch(getCommentsAction(id));
        dispatch(getTicketsAction(id));
        dispatch(getSelectedBoardAction(id));
    }, []);
    return (
        <div className="container">
            {boardError  ?
             (<p>{boardError}</p>) : (
              board && <div className="dashboard">
                <DashboardControls />
                <ColumnList board={board} />
               </div>
            )}
        </div>
    )
}

export default Dashboard;