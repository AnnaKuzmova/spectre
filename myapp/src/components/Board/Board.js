import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CreateBoardModal from './CreateBoardModal';
import {teamAction} from '../../store/actions/teamActions';
import {openCreateBoardModal} from '../../store/actions/boardActions';
import { getAllTemplatesAction } from '../../store/actions/templateActions';
import BoardList from './BoardList';
import DeleteBoardModal from './DeleteBoardModal';
import './Board.css';
import { Link } from 'react-router-dom';

const Board = () => {
    const [boardId, setBoardId] = useState("");
    const team = useSelector(state => state.team.currentUserTeam);
    const isDeleteModalOpen = useSelector(state => state.board.isDeleteModalOpen);
    const isCreateBoardModalOpen = useSelector(state => state.board.createBoardModal);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllTemplatesAction())
        dispatch(teamAction());
    }, []);
    return (
        <div className="container">
            <section className="board-component">
                <section className="flex">
                    <h4>My Boards</h4>
                    <div className="board-controls-buttons">
                        <Link to="/reports"><i className="fas fa-chart-area"></i>  Analytics</Link>
                        <button onClick={()=> {dispatch(openCreateBoardModal())}} className="waves-effect waves-light btn purple accent-2"> Create Board</button>
                    </div>
                </section>
            </section>
            {isDeleteModalOpen && <DeleteBoardModal boardId={boardId} />}
            {team && <BoardList team={team} setBoardId={setBoardId} />}
            {isCreateBoardModalOpen && <CreateBoardModal />}
        </div>
    );
}

export default Board;