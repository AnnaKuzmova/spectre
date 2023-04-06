import React, {useEffect} from 'react';
import TemplateList from './TemplateList';
import CreateTemplate from './CreateTemplate';
import ErrorModal from './ErrorModal';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTemplatesAction} from '../../store/actions/templateActions';
import { openCreateTemplateModal } from '../../store/actions/templateActions';
import './Templates.css';

const Templates = () => {
    const dispatch = useDispatch();
    const templates = useSelector(state => state.template.allTemplates);
    const deleteTemplateError = useSelector(state => state.template.deleteTemplateError);
    const isCreateModalOpen = useSelector(state => state.template.isCreateModalOpen);
    useEffect(() => {
        dispatch(getAllTemplatesAction());
    }, []);
    return (
        templates && <div className="container">
            <section className="flex">
               <h4>Templates</h4>
               <button onClick={()=>{dispatch(openCreateTemplateModal())}} className="deep-purple darken-4 btn">Create Template</button>
           </section>
            <TemplateList />
            {isCreateModalOpen && <CreateTemplate />}
            {deleteTemplateError && <ErrorModal errorMessage={deleteTemplateError} />}
        </div>
    );
}

export default Templates;