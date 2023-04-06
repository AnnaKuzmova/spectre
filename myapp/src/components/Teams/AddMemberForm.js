import React from 'react';
import { teamMemberAction } from '../../store/actions/teamActions';
import {useDispatch, useSelector} from 'react-redux';

const AddMemberForm = () => {
    const team = useSelector(state => state.team.currentUserTeam);
    const errorMesg = useSelector(state => state.team.teamMemberError);
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(teamMemberAction(e.target.email.value, team.id,team.users));
    }
    return (
        <form className="add-member-form" onSubmit={(e) => {handleSubmit(e)}}>
            <input type="email" name="email" placeholder="email address.."/>
            {errorMesg && <p className="error-message">{errorMesg}</p>}
        </form>
    )
}

export default AddMemberForm;