const initialState = {
    comments: null,
    commentsError: null,
    tickets: null,
    ticketsError: null
}

const reportReducer = (state = initialState,action) => {
    switch(action.type) {
        case 'GET_REPORT_COMMENTS':
            return {
                ...state,
                commentsError: null,
                comments: [...action.comments]
            }
            case 'GET_REPORT_COMMENTS_ERROR':
                return {
                    ...state,
                    commentsError: action.errMsg
                }
            case 'GET_REPORT_TICKETS':
                return {
                    ...state,
                    ticketsError: null,
                    tickets: [...action.tickets]
                }
                case 'GET_REPORT_TICKETS_ERROR':
                return {
                    ...state,
                    ticketsError: action.errMsg
                }              
        default:
            return state;    
    }
}


export default reportReducer;