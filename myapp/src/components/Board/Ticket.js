import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {removeTicketAction, updateVoteAction} from '../../store/actions/boardActions';
import CommentList from './CommentList';

const Ticket = ({ticket}) => {
    const dispatch = useDispatch();
    const [showComments,setShowComments] = useState(false);
    const updateVote = () => {
       dispatch(updateVoteAction(ticket.id,ticket.votes));
    }
    return (
        <article className="ticket">
            <span>{ticket.content}</span>
            <section className="ticket-controls">
                <div className="flex">
                    <div className="ticket-controls">
                        <button onClick={()=>{updateVote()}}><i className="far fa-thumbs-up"></i>  {ticket.votes}</button>
                        <button onClick={()=>setShowComments(!showComments)}><i className="far fa-comment"></i></button>
                    </div>
                    {ticket.userId === localStorage.getItem("logged_user") && <button onClick={()=>{dispatch(removeTicketAction(ticket.id))}}  className="remove-ticket">remove</button>}
                </div>
                {showComments && <CommentList ticket={ticket.id} />}
            </section>
        </article>
    );
}

export default Ticket;