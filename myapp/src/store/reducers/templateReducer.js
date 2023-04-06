const initialState = {
    isCreateModalOpen: false,
    allTemplates: null,
    allTemplatesError: null,
    boardTemplate:null,
    boardTemplateError:null,
    createTemplateError: null,
    deleteTemplateError: null
}



const templateReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_TEMPLATE': {
            return {
                ...state,
                boardTemplate: action.template,
                boardTemplateError: null
            }
        }
        case 'GET_TEMPLATE_ERROR':
            return {
                ...state,
                boardTemplateError: action.errMsg
            }
        case 'GET_ALL_TEMPLATES':
            return {
                ...state,
                allTemplatesError: null,
                allTemplates: [...action.templates]
            }
        case ' GET_ALL_TEMPLATES_ERROR':
            return {
                ...state,
                allTemplatesError: action.errMsg
            }
        case 'OPEN_CREATE_TEMPLATE_MODAL':
            return {
                ...state,
                isCreateModalOpen: true
            }
        case 'CLOSE_CREATE_TEMPLATE_MODAL': 
            return {
                ...state,
                isCreateModalOpen: false
            }
        case 'CREATE_TEMPLATE':
            return {
                ...state,
                createTemplateError: null,
                isCreateModalOpen: false,
                allTemplates: [...state.allTemplates, action.template]
            }
        case 'CREATE_TEMPLATE_ERROR':
            return {
                ...state,
                createTemplateError: action.errMsg
            }
        case 'DELETE_TEMPLATE':
            const updatedTemplates = state.allTemplates.filter( template => template.id !== action.template)
            return {
                ...state,
                deleteTemplateError: null,
                allTemplates: [...updatedTemplates]
            }
        case 'DELETE_TEMPLATE_ERROR':
            return {
                ...state,
                deleteTemplateError: action.errMsg
            }
        case 'RESET_DELETE_TEMPLATE_ERROR':
            return {
                ...state,
                deleteTemplateError: null
            }                    
        default:
            return state;       
    }
}

export default templateReducer;