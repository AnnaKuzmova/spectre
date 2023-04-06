import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBoardsAction } from '../../store/actions/boardActions';
import { openDeleteBoardModal } from '../../store/actions/boardActions';

const BoardList = ({team, setBoardId}) => {
    const dispatch = useDispatch();
    const boards = useSelector(state => state.board.currentUserBoards);
    useEffect(() => {
        dispatch(getBoardsAction(team.id));
    }, []);
    const handleDelete = (id) => {
        setBoardId(id);
        dispatch(openDeleteBoardModal());
    }
    return (
        <section className="all-boards">
            {boards.length > 0 ? boards.map(board => {
                return (
                    <article className="board" key={board.id}>
                        <div className="board-information">
                            <h5>{board.name}</h5>
                            <p>Team: <span>{team.emoji} - {team.name}</span></p>
                            <p><i className="far fa-clock"></i> - {board.createdAt}</p>
                        </div>
                        <div className="flex board-controls">
                            <button onClick={()=> {handleDelete(board.id)}} className="delete-board-btn"><i className="fas fa-trash-alt"></i> Delete</button>
                            <button className="view-board-btn"><Link to={`boards/${board.id}`}><i className="fas fa-eye"></i> - View</Link></button>
                        </div>
                    </article>
                );
            }) : (<p>There are no boards. Create one or wait for team members to create one instead.</p>)}
        </section>
    )
}

export default BoardList;