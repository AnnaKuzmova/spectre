const initialState = {
    isAuth: false,
    registerErrorMsg: null,
    loginErrorMsg: null,
    users: []
};
const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN' :
            return {
                ...state,
                isAuth: true,
                loginErrorMsg: null
            };
        case 'REGISTER':
            return {
                ...state,
                isAuth: true,
                registerErrorMsg: null,
                users: state.users.concat(action.user)  
            };    
        case 'LOGOUT':
            return {
                ...state,
                isAuth: false
            }
        case 'REGISTER_ERROR':
            return {
                ...state,
                registerErrorMsg: action.errorMessage
            } 
        case 'LOGIN_ERROR':
            return {
                ...state,
                loginErrorMsg: action.errorMessage
            }       
        default :
            return state;    
    }
}

export default authReducer;