import types from "../actionTypes/types";
import axios from "axios";

export const getTemplate = (data) => {
    return {
        type: types.GET_TEMPLATE,
        template: data
    }
}

export const getTemplateError = (err) => {
    return {
        type: types.GET_TEMPLATE_ERROR,
        errMsg: err
    }
}

export const getTemplateAction = (id) => (dispatch) => {
    axios
    .get("http://localhost:8000/templates/" + id)
    .then(response =>dispatch(getTemplate(response.data)))
    .catch(error => dispatch(getTemplateError("Could not load columns.")));
}

export const getAllTemplates = (data) => {
    return {
        type: types.GET_ALL_TEMPLATES,
        templates: data
    }
}

export const getTemplatesError = (err) => {
    return {
        type: types.GET_ALL_TEMPLATES_ERROR,
        errMsg: err
    }
}

export const getAllTemplatesAction = () => (dispatch) => {
    axios
    .get("http://localhost:8000/templates")
    .then(response => dispatch(getAllTemplates(response.data)))
    .catch(error => dispatch(getTemplatesError("Could not load templates.")))
}

export const openCreateTemplateModal = () => {
    return {
        type: types.OPEN_CREATE_TEMPLATE_MODAL
    }
}

export const closeCreateTemplateModal = () => {
    return {
        type: types.CLOSE_CREATE_TEMPLATE_MODAL
    }
}

export const createTemplate = (data) => {
    return {
        type: types.CREATE_TEMPLATE,
        template: data
    }
}

export const createTemplateError = (err) => {
    return {
        type: types.CREATE_TEMPLATE,
        errMsg: err
    }
}

export const createTemplateAction = (template) => (dispatch) => {
    const newTemplate = {
            name:template.name,
            columns: [template.columnOne,template.columnTwo, template.columnThree],
            createdBy: localStorage.getItem("logged_user")
        }
    axios
    .post("http://localhost:8000/templates", newTemplate)
    .then(response => dispatch(createTemplate(response.data)))
    .catch(error => dispatch(createTemplateError("Could not create new template.")))
}

export const deleteTemplate = (id) => {
    return {
        type: types.DELETE_TEMPLATE,
        template: id
    }
}

export const deleteTemplateError = (err) => {
    return {
        type: types.DELETE_TEMPLATE_ERROR,
        errMsg: err
    }
}

export const deleteTemplateAction = (id) => (dispatch) => {
    axios
    .get("http://localhost:8000/boards?template=" + id)
    .then(response => {
        if(response.data.length > 0) {
            dispatch(deleteTemplateError("Could not delete template which other boards use."))
        }else {
            axios
            .delete("http://localhost:8000/templates/"+id)
            .then(res => dispatch(deleteTemplate(id)))
            .catch(err => dispatch(deleteTemplateError("Could not delete current template.")))
        }
    })
    .catch(error => dispatch(deleteTemplateError("Could not delete current template.")))
}

export const resetDeleteError = () => {
    return {
        type:types.RESET_DELETE_TEMPLATE_ERROR
    }
}




