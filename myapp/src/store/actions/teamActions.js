import types from '../actionTypes/types';
import axios from 'axios';

export const getUserTeam = (data) => {
    return {
        type: types.GET_USER_TEAM,
        team: data
    }
}

export const getTeamError = () => {
    return {
        type: types.USER_TEAM_ERROR,
        errorMsg: 'Could not get team.'
    }
}

export const teamAction = () => async(dispatch) => {
    axios
    .get("http://localhost:8000/teams?users_like=" + localStorage.getItem('logged_user'))
    .then(response => {
        if(response.data.length > 0) {
            dispatch(getUserTeam(response.data[0]));
        }else {
            dispatch(getTeamError()); 
        }
    })
    .catch(error => {
        dispatch(getTeamError());
    })
}

export const openTeamViwModal = () => {
    return {
        type: types.OPEN_TEAMVIEW_MODAL
    }
}

export const closeTeamViewModal = () => {
    return {
        type: types.CLOSE_TEAMVIEW_MODAL
    }
}

export const openDeleteTeamModal = () => {
    return {
        type: types.OPEN_DELETE_TEAM_MODAL
    }
}

export const closeDeleteTeamModal = () => {
    return {
        type: types.CLOSE_DELETE_TEAM_MODAL
    }
}

export const deleteTeam = () => {
    return {
        type: types.DELETE_TEAM
    }
}

export const deleteTeamError = (err) => {
    return {
        type: types.DELETE_TEAM_ERROR,
        errorMsg: err
    }
}

export const deleteTeamAction = (teamId) => async(dispatch) => {
    axios
    .get("http://localhost:8000/boards?teamId=" + teamId)
    .then(response => {
        if(response.data.length > 0) {
            dispatch(deleteTeamError("Delete your team boards before deleting the team."));
        }else {
            axios
            .delete("http://localhost:8000/teams/"+teamId)
            .then(response => dispatch(deleteTeam()))
            .catch(error => dispatch(deleteTeamError("Could not delete team.")));
        }
    })
    .catch(dispatch(deleteTeamError("Could not delete team.")))
}

export const addTeamMember = (data) => {
    return {
        type: types.ADD_TEAM_MEMBER,
        member: data
    }
}

export const teamMemberError = (errorMsg) => {
    return {
        type: types.TEAM_MEMBER_ERROR,
        errorMsg : errorMsg
    }
}

export const teamMemberAction = (email,teamId,users) => async(dispatch) => {
    let memberId ="";
    axios
    .get("http://localhost:8000/users?email="+email)
    .then(response => {
        memberId = response.data[0].id;
        if(response.data.length > 0) {
            axios
            .get("http://localhost:8000/teams?users_like="+ memberId)
            .then(res => {
                if(res.data.length > 0) {
                    dispatch(teamMemberError("User is in a team."));
                }else {
                    axios
                    .patch("http://localhost:8000/teams/"+teamId, {users: [...users,memberId]})
                    .then(ress => {dispatch(addTeamMember(memberId))})
                    .catch(er => {dispatch(teamMemberError("Could not add member to team"))})
                }
            })
        }else {
            dispatch(teamMemberError("User does not exist."));
        }
    })
    .catch(error => {
        dispatch(teamMemberError("Could not get user."));
    })
}

export const createTeam = (data) => {
    return {
        type: types.CREATE_TEAM,
        team: data
    }
}

export const createTeamError = (err) => {
    return {
        type: types.CREATE_TEAM_ERROR,
        errMsg: err
    }
}

export const createTeamAction = (team) => (dispatch) => {
    const newTeam = {...team, createdAt: new Date().toISOString().slice(0, 10), users: [localStorage.getItem('logged_user')]} 
    axios
    .get("http://localhost:8000/teams?users_like=" + localStorage.getItem('logged_user'))
    .then(response => {
        if(response.data.length > 0) {
            dispatch(createTeamError("You are already in a team."));
        }else {
            axios
            .post("http://localhost:8000/teams", newTeam)
            .then(res => {
                dispatch(createTeam(newTeam));
                window.location = "/teams";
            })
            .catch(error => {dispatch(createTeamError("Could not create team."))});
        }
    })
    .catch(err => {
        dispatch(createTeamError("Could not create a team."));
    })
}

export const leaveTeam = (data) => {
    return {
        type: types.LEAVE_TEAM,
    }
}

export const leaveTeamError = (err) => {
    return {
        type: types.LEAVE_TEAM_ERROR,
        errMsg: err
    }
}

export const leaveTeamAction = (team) => (dispatch) => {
    const newUsers = team.users.filter(user => user !== localStorage.getItem("logged_user"));
    axios
    .patch("http://localhost:8000/teams/"+ team.id, {users: newUsers})
    .then(response => { dispatch(leaveTeam())})
    .catch(error => dispatch(leaveTeamError('Could not leave team.')))
}