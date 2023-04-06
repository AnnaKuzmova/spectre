import React from 'react';
import { useDispatch } from 'react-redux';
import { openTicketForm } from '../../store/actions/boardActions';

const OpenTicketFormButton = ({openTicketForm}) => {
    return (
        <button onClick={()=> {openTicketForm(true)}} className="open-ticket-form-btn"><i className="fas fa-plus"></i></button>
    );
}

export default OpenTicketFormButton;