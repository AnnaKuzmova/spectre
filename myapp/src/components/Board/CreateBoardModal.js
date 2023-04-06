import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeCreateBoardModal, createBoardAction} from '../../store/actions/boardActions';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createTeamAction } from '../../store/actions/teamActions';

const schema =  yup.object().shape({
    name:yup.string().required(),
    template: yup.string().required()
});

const CreateBoardModal = () => {
    const dispatch = useDispatch();
    const templates = useSelector(state => state.template.allTemplates);
    const createBoardError = useSelector(state => state.board.createBoardError);
    const {register,handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
        });
    const submitForm = (data) => {
        dispatch(createBoardAction(data));
    }
    return (
        <section id="create-board-bg">
            <form className="form create-board-form" onSubmit={handleSubmit(submitForm)}>
                <h4>Create Board</h4>
                <div className="row">
                    <div className="input-field col s12">
                        <input required id="board-name" placeholder="Board name" name="name" type="text" {...register('name')} />
                        <span className="error-message">{errors.name?.message}</span>
                    </div>
                </div>
                <div className="input-field col s12">
                    <p> Template: </p>
                    <select className="select-template" name="template" {...register('template')}>
                        {templates && templates.map(template => (
                            <option value={template.id}>{template.name}</option>
                        ))}
                    </select>
                    <span className="error-message">{errors.template?.message}</span>
                </div>
                <p className="error-message">{createBoardError}</p>
                <div className="flex container">
                    <button type="button" onClick={() => dispatch(closeCreateBoardModal())} className="waves-effect waves-light btn red lighten-1 close-create-modal">Cancel</button>
                    <input type="submit" value="create" className="waves-effect waves-light btn deep-purple lighten-2" />
                </div>
            </form>
        </section>
    );
}

export default CreateBoardModal;