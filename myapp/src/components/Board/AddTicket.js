import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTicketAction } from '../../store/actions/boardActions';

const AddTicket = ({closeTicketForm, name}) => {
    const dispatch = useDispatch();
    const board = useSelector(state => state.board.selectedBoard);
    const ticketError = useSelector(state => state.board.addTicketError);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTicketAction({boardId: board.id, column: name, userId: localStorage.getItem("logged_user"), content: e.target["ticket"].value, votes:0 }));
    }
    return (
        <form className="form-ticket" onSubmit={handleSubmit} >
            <input type="text" name="ticket" placeholder="add ticket.."  required/>
            <p className="error-message">{ticketError}</p>
            <div className="flex">
                <input type="submit" value="add" className="btn" />
                <input onClick={()=>{closeTicketForm(false)}} type="button" value="cancel" className="cancel-ticket-btn" />
            </div>
        </form>
    )
}

export default AddTicket;