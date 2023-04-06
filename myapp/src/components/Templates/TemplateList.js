import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTemplateAction } from '../../store/actions/templateActions';

const TemplateList = () => {
    const dispatch = useDispatch();
    const templates = useSelector(state => state.template.allTemplates);
    return (
        <div className="template-list">
            {templates.map(template => (
                <article className="template-card">
                    <h5>{template.name}</h5>
                    {template.columns.map(column => (<p><i className="fas fa-columns"></i> {column}</p>))}
                    {template.createdBy === localStorage.getItem("logged_user") && <button onClick={() => {dispatch(deleteTemplateAction(template.id))}} className="btn red darken-1">delete</button>}
                </article>
            ))}
        </div>
    );
}

export default TemplateList;