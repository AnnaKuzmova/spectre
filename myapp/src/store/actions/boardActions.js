import types from '../actionTypes/types';
import axios from 'axios';

export const openCreateBoardModal = () => {
    return {
        type: types.OPEN_CREATE_BOARD_MODAL
    }
}

export const closeCreateBoardModal = () => {
    return {
        type: types.CLOSE_CREATE_BOARD_MODAL
    }
}

export const createBoard = (data) => {
    return {
        type: types.CREATE_BOARD,
        board: data
    }
}

export const createBoardError = (errMsg) => {
    return {
        type: types.CREATE_BOARD_ERROR,
        errorMsg: errMsg
    }
}

export const createBoardAction = (board) => async(dispatch) => {
    const newBoard = {...board, createdAt: new Date().toISOString().slice(0, 10)}
    axios
    .get("http://localhost:8000/teams?users_like=" + localStorage.getItem("logged_user"))
    .then(response => {
        if(response.data.length > 0) {
            newBoard.teamId = response.data[0].id; 
            axios
            .post("http://localhost:8000/boards", newBoard)
            .then(res => {
                dispatch(createBoard(res.data));
            })
            .catch(err => dispatch(createBoardError("Could not create board.")));
        }else {
            dispatch(createBoardError("To create a board you must be in a team."));
        }
    })
    .catch(error => dispatch(createBoardError("Could not create board.")));
}

export const getBoards = (data) => {
    return {
        type: types.GET_BOARDS,
        boards: data
    }
}

export const getBoardsError = (errMsg) => {
    return {
        type: types.GET_BOARDS_ERROR,
        errorMsg: errMsg
    }
}

export const getBoardsAction = (teamId) => (dispatch) => {
    axios
    .get("http://localhost:8000/boards?teamId=" + teamId)
    .then(response => {dispatch(getBoards(response.data));})
    .catch(error => {dispatch(getBoardsError('Could not get boards.'))})
}

export const openDeleteBoardModal = () => {
    return {
        type: types.OPEN_DELETE_BOARD_MODAL
    }
}

export const closeDeleteBoardModal = () => {
    return {
        type: types.CLOSE_DELETE_BOARD_MODAL
    }
}

export const deleteBoard = (id) => {
    return {
        type: types.DELETE_BOARD,
        boardId: id
    }
}

export const deleteBoardError = (err) => {
    return {
        type: types.DELETE_BOARD_ERROR,
        errMsg: err
    }
}

export const deleteBoardAction = (id) => (dispatch) => {
    axios
    .delete("http://localhost:8000/boards/"+ id)
    .then(response => dispatch(deleteBoard(id)))
    .catch(err => {dispatch(deleteBoardError("Could not delete board"))});
}

export const getSelectedBoard = (data) => {
    return {
        type: types.GET_SELECTED_BOARD,
        board: data
    }
}

export const getSelectedBoardError = (err) => {
    return {
        type: types.GET_SELECTED_BOARD_ERROR,
        errMsg: err
    }
}

export const getSelectedBoardAction = (id) => (dispatch) => {
    axios
    .get("http://localhost:8000/boards/" + id)
    .then(response => dispatch(getSelectedBoard(response.data)))
    .catch(error => dispatch(getSelectedBoardError("Board does not exist.")))
}

export const getTickets = (data) => {
    return {
        type: types.GET_TICKETS,
        tickets: data
    }
}

export const getTicketsError =(err) => {
    return {
        type: types.GET_TICKETS_ERROR,
        errMsg: err
    }
}

export const getTicketsAction =  (id) => (dispatch) => {
    axios
    .get("http://localhost:8000/tickets?boardId=" + id)
    .then(response => {
        if(response.data.length > 0) {
            dispatch(getTickets(response.data))
        }
    })
    .catch(error => dispatch(getTicketsError("Could not get board's tickets.")))
} 

export const addTicket = (data) => {
    return {
        type: types.ADD_TICKET,
        ticket: data
    }
}

export const addTicketError = (err) => {
    return {
        type: types.ADD_TICKET_ERROR,
        errMsg: err
    }
}

export const addTicketAction = (ticket) => (dispatch) => {
    axios
    .post("http://localhost:8000/tickets", ticket)
    .then(response => dispatch(addTicket(response.data)))
    .catch(error => dispatch(addTicketError("Could not create ticket")));
}

export const removeTicket = (id) => {
    return {
        type: types.REMOVE_TICKET,
        ticket: id
    }
}

export const removeTicketError = (err) => {
    return {
        type: types.REMOVE_TICKET_ERROR,
        errMsg: err
    }
}

export const removeTicketAction = (id) => (dispatch) => {
    axios
    .delete("http://localhost:8000/tickets/" + id)
    .then(response => dispatch(removeTicket(id)))
    .catch(error => dispatch(removeTicketError("Could not remove ticket.")))
}

export const updateVote = (data) => {
    return {
        type: types.UPDATE_VOTE,
        ticket: data
    }
}

export const updateVoteError = (err) => {
    return {
        type: types.UPDATE_VOTE_ERROR,
        errMsg: err
    }
}

export const updateVoteAction = (id,currentVote) => (dispatch) => {
    const vote = currentVote + 1;
    axios
    .patch("http://localhost:8000/tickets/"+id, {votes:vote})
    .then(response => dispatch(updateVote(response.data)))
    .catch(error => dispatch("Could not update vote.") )
}

export const getAllComments = (data) => {
    return {
        type: types.GET_ALL_COMMENTS,
        comments: data
    }
}

export const getAllCommentsError = (err) => {
    return {
        type: types.GET_ALL_COMMENTS_ERROR,
        errMsg: err
    }
}

export const getCommentsAction = (boardId) => (dispatch) => {
    axios
    .get("http://localhost:8000/comments?boardId=" + boardId)
    .then(response => {
        if(response.data.length > 0) {
            dispatch(getAllComments(response.data));
        }
    })
    .catch(error => dispatch(getAllCommentsError("Couldnt get comments.")))
}

export const deleteComment = (id) => {
    return {
        type: types.DELETE_COMMENT,
        comment: id
    }
}

export const deleteCommentError = (err) => {
    return {
        type: types.DELETE_COMMENT_ERROR,
        errMsg: err
    }
}

export const deleteCommentAction = (id) => (dispatch) => {
    axios
    .delete("http://localhost:8000/comments/"+id)
    .then(response => dispatch(deleteComment(id)))
    .catch(erro => dispatch(deleteCommentError("Could not delete comment.")));
}

export const addComment = (comment) => {
    return {
        type: types.ADD_COMMENT,
        comment: comment
    }
}

export const addCommentError = (err) => {
    return {
        type: types.ADD_COMMENT_ERROR,
        errMsg: err
    }
}

export const addCommentAction = (comment,boardId, ticketId) => (dispatch) => {
    const newComment = {content: comment, boardId, ticketId, userId: localStorage.getItem("logged_user")}
    axios
    .post("http://localhost:8000/comments", newComment)
    .then(response => dispatch(addComment(response.data)))
    .catch(error => dispatch(addCommentError("Could not post comment.")));
}





