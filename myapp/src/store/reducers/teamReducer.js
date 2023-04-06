const initialState = {
    currentUserTeam: null,
    teamErrorMsg: null,
    teamViewModal: false,
    teamDeleteModal: false,
    deleteTeamError: null,
    teamMemberError: null,
    createTeamError: null,
    leaveTeamError: null
}

const teamReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_USER_TEAM':
            return {
                ...state,
                currentUserTeam: action.team,
                currentUserTeamMsg: null
            };
        case 'USER_TEAM_ERROR':
            return {
                ...state,
                currentUserTeam: null,
                teamErrorMsg: action.errorMsg
            };
        case 'OPEN_TEAMVIEW_MODAL':
            return {
                ...state,
                teamMemberError: null,
                teamViewModal: true
            };
        case 'CLOSE_TEAMVIEW_MODAL':
            return {
                ...state,
                teamViewModal: false
            };
        case 'OPEN_DELETE_TEAM_MODAL':
            return {
                ...state,
                teamDeleteModal: true

            };
        case 'CLOSE_DELETE_TEAM_MODAL':
            return {
                ...state,
                deleteTeamError: null,
                teamDeleteModal: false
            };
        case 'DELETE_TEAM':
            return {
                ...state,
                currentUserTeam: null,
                deleteTeamError: null,
                teamDeleteModal: false

            };
        case 'DELETE_TEAM_ERROR':
            return {
                ...state,
                deleteTeamError: action.errorMsg
            }
        case 'TEAM_MEMBER_ERROR':
            return {
                ...state,
                teamMemberError: action.errorMsg
            };
        case 'ADD_TEAM_MEMBER':
            return {
                ...state,
                teamMemberError: null,
                currentUserTeam: {
                    ...state.currentUserTeam,
                    users: [...state.currentUserTeam.users,action.member]
                }          
            };
        case 'CREATE_TEAM' : 
            return {
                ...state,
                createTeamError: null,
                currentUserTeam: action.team
            };
        case 'CREATE_TEAM_ERROR':
            return {
                ...state,
                createTeamError: action.errMsg
            }
        case 'LEAVE_TEAM':
            return {
                ...state,
                currentUserTeam: null,
                teamViewModal: false,
                leaveTeamError: null
            }
        case 'LEAVE_TEAM_ERROR':
            return {
                ...state,
                leaveTeamError: action.errMsg
            }                                
        default:
            return state;                
    }
}

export default teamReducer;