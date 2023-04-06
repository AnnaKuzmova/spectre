import React from 'react';
import { useDispatch } from 'react-redux';
import { resetDeleteError } from '../../store/actions/templateActions';

const ErrorModal = ({errorMessage}) => {
    const dispatch = useDispatch();
    return (
        <section id="error-modal-bg">
            <article className="error-modal-content">
                <h3>Error!</h3>
                <p>{errorMessage}</p>
                <button onClick={() => dispatch(resetDeleteError())} className="btn  red darken-1 close-modal-btn">close</button>
            </article>
        </section>
    );
}

export default ErrorModal;