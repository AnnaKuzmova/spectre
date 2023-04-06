import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createTeamAction } from '../../store/actions/teamActions';
import { Link } from 'react-router-dom';
import './Teams.css';

const schema =  yup.object().shape({
    name:yup.string().required(),
    emoji: yup.string().required()
});

const CreateTeam = (props) => {
    const dispatch = useDispatch();
    const errorMsg = useSelector(state => state.team.createTeamError);
    const {register,handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
        });
    const submitForm = (data) => {
        dispatch(createTeamAction(data));
    }
    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit(submitForm)}>
            <h3>Create a team</h3>
            <div className="input-field col s6">
                <p>Team name:</p>
                <input placeholder="Team Name.." name="name"  id="team-name" type="text" className="validate" {...register('name')} />
                <span className="error-message">{errors.name?.message}</span>
            </div>
            <div className="input-field col s12">
                <p> Choose team's emoji </p>
                <select name="emoji" className="select-emoji" {...register('emoji')} >
                    <option value=" 🤠 "> 🤠 </option>
                    <option value="🤑">🤑</option>
                    <option value=" 👽 "> 👽 </option>
                    <option value=" 😴 "> 😴 </option>
                    <option value=" 🤖 "> 🤖 </option>
                    <option value=" 🤩 "> 🤩 </option>
                    <option value=" ✌️ "> ✌️ </option>
                    <option value=" 👨‍💻 "> 👨‍💻 </option>
                    <option value=" 💪 ">  💪  </option>
                </select>
                <span className="error-message">{errors.emoji?.message}</span>
            </div>
            <p className="error-message">{errorMsg}</p>
            <div className="flex">
                <input type="submit" value="create" className="waves-effect waves-light btn deep-purple lighten-2" />
                <button className="btn cancel" type="button"><Link to="/teams">cancel</Link></button>
            </div>
            </form>
        </div>
    );
}

export default CreateTeam;