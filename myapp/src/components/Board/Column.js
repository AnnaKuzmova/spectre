import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import AddTicket from './AddTicket';
import OpenTicketFormButton from './OpenTicketFormButton';
import Ticket from './Ticket';
import axios from 'axios';
import './Board.css';

const Column = ({name}) => {
   const board = useSelector(state => state.board.selectedBoard);
   const [ticketForm,setTicketForm ] = useState(false);
   const tickets = useSelector(state => state.board.boardTickets);
   useEffect(() => {
   
   }, []);
    return (
        <article className="column">
            <div className="column-info">{name}</div>
            <section className="cards-continer">
                {ticketForm ? <AddTicket closeTicketForm={setTicketForm} name={name} /> : <OpenTicketFormButton openTicketForm={setTicketForm} />}
                {tickets.filter(ticket => ticket.column === name).map(ticket => (<Ticket ticket={ticket}/>))}
            </section>
        </article>
    );
}

export default Column;