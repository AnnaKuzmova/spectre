import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { closeCreateTemplateModal, createTemplateAction } from '../../store/actions/templateActions';

const schema =  yup.object().shape({
    name:yup.string().required(),
    columnOne:yup.string().required(),
    columnTwo: yup.string().required(),
    columnThree: yup.string().required()
});

const CreateTemplate = () => {
    const dispatch = useDispatch();
    const createTemplateErr = useSelector(state => state.template.createTemplateError);
    const {register,handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
        });
        const submitForm = (data) => {
            dispatch(createTemplateAction(data));
        }
    return (
        <section id="create-template-bg">
            <article>
                <form className="template-form" onSubmit={handleSubmit(submitForm)}>
                    <h3>Create Template</h3>
                    <div className="input-field col s6">
                        <p>Template Name:</p>
                        <input type="text" name="name" placeholder="Template Name.." {...register('name')} />
                        <span className="error-message">{errors.name?.message}</span>
                    </div>
                    <div className="input-field col s6">
                        <p><i className="fas fa-columns"></i> Column Name:</p>
                        <input type="text" name="columnOne" placeholder="Column Name.." {...register('columnOne')} />
                        <span className="error-message">{errors.columnOne?.message}</span>
                    </div><div className="input-field col s6">
                        <p><i className="fas fa-columns"></i> Column Name:</p>
                        <input type="text" name="columnTwo" placeholder="Column Name.." {...register('columnTwo')} />
                        <span className="error-message">{errors.columnTwo?.message}</span>
                    </div><div className="input-field col s6">
                        <p><i className="fas fa-columns"></i> Column Name:</p>
                        <input type="text" name="columnThree" placeholder="Column Name.." {...register('columnThree')} />
                        <span className="error-message">{errors.columnThree?.message}</span>
                    </div>
                    <p className="error-message">{createTemplateErr}</p>
                    <input className="create-template-btn" type="submit" value="create"/>
                    <input onClick={()=>{dispatch(closeCreateTemplateModal())}} className="cancel-create-btn" type="button" value="cancel" />
                </form>
            </article>
        </section>
    );
}

export default CreateTemplate;