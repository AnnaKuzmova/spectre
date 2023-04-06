import React, {useEffect} from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';
import { getBoardsAction } from '../../store/actions/boardActions';

const Chart = ({team}) => {
    const dispatch = useDispatch();
    const boards = useSelector(state => state.board.currentUserBoards);
    const comments = useSelector(state => state.report.comments);
    const tickets = useSelector(state => state.report.tickets);
    useEffect(() => {
        dispatch(getBoardsAction(team.id));
    },[]);
    return (
       (boards && comments && tickets) && <div>
            <Bar
                data={
                    {
                        labels: boards.map(board => board.name),
                        datasets: [
                            {   
                                label: "# Of Comments",
                                data: boards.map((board) => {
                                    return comments.filter(comment => comment.boardId === board.id).length;
                                }),
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.5)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 2)'
                                ],
                                borderWidth: 1

                            },
                            {
                                label: "# Of Tickets",
                                data:boards.map((board) => {
                                    return tickets.filter(ticket => ticket.boardId === board.id).length;
                                }),
                                backgroundColor: [
                                    'rgba(0,0,255,0.4)'
                                ],
                                borderColor: [
                                    'rgba(0,0,255,0.4)'
                                ],
                                borderWidth: 1
                            },
                            {
                                label: "# Of Votes",
                                data: boards.map((board) => {
                                    return tickets
                                    .filter(ticket => ticket.boardId === board.id)
                                    .reduce((acc, ticket) => acc + parseInt(ticket.votes), 0);
                                }),
                                backgroundColor: [
                                    'rgba(0,128,0,0.4)'
                                ],
                                borderColor: [
                                    'rgba(0,128,0,1)'
                                ],
                                borderWidth: 1 
                            }
                        ]
                    }
                }
                width={400}
                
            />
        </div>
    );
}

export default Chart;