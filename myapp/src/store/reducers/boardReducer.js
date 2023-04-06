const initialState = {
    createBoardModal : false,
    currentUserBoards: [],
    createBoardError: null,
    getBoardsError: null,
    isDeleteModalOpen: false,
    deleteBoardError: null,
    selectedBoard: null,
    selectedBoardError: null,
    boardTickets: [],
    boardTicketsError: null,
    addTicketError: null,
    removeTicketError: null,
    updateVoteError: null,
    comments: [],
    commentsError: null,
    deleteCommentError: null,
    addCommentError: null
}

const boardReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'OPEN_CREATE_BOARD_MODAL': 
        return {
            ...state,
            createBoardModal: true
        };
        case 'CLOSE_CREATE_BOARD_MODAL':
            return {
                ...state,
                createBoardModal: false
            };
        case 'CREATE_BOARD':
            return {
                ...state,
               currentUserBoards: [
                   ...state.currentUserBoards, action.board
               ],
               createBoardError: null,
               createBoardModal: false
            }
        case 'CREATE_BOARD_ERROR':
            return {
                ...state,
                createBoardError: action.errorMsg
            }
        case 'GET_BOARDS' :
            return {
                ...state,
                getBoardsError: null,
                currentUserBoards: [
                    ...action.boards
                ]
            }
        case 'GET_BOARDS_ERROR':
            return {
                ...state,
                getBoardsError: action.errorMsg
            }
        case 'OPEN_DELETE_BOARD_MODAL':
            return {
                ...state,
                isDeleteModalOpen: true
            }
        case 'CLOSE_DELETE_BOARD_MODAL':
            return {
                ...state,
                isDeleteModalOpen: false
            }
        case 'DELETE_BOARD':
            const newBoards = state.currentUserBoards.filter(board => board.id !== action.boardId);
            return {
                ...state,
                deleteBoardError: null,
                isDeleteModalOpen: false,
                currentUserBoards: [...newBoards]
            }
        case 'DELETE_BOARD_ERROR': 
            return {
                ...state,
                deleteBoardError: action.errMsg
            }
        case 'GET_SELECTED_BOARD':
            return {
                ...state,
                selectedBoardError: null,
                selectedBoard: action.board
            }
        case 'GET_SELECTED_BOARD_ERROR': 
            return {
                ...state,
                selectedBoardError: action.errMsg,
                selectedBoard: null
            }
        
        case 'GET_TICKETS':
            return {
                ...state,
                boardTickets: [...action.tickets],
                boardTicketsError: null
            }
        case 'GET_TICKETS_ERROR': 
            return {
                ...state,
                boardTicketsError: action.errMsg
            }
        case 'ADD_TICKET':
            return {
                ...state,
                boardTickets: [...state.boardTickets, action.ticket],
                addTicketError: null
            }
        case 'ADD_TICKET_ERROR':
            return {
                ...state,
                addTicketError: action.errMsg
            }
        case 'REMOVE_TICKET':
            const newTickets = state.boardTickets.filter(ticket => ticket.id !== action.ticket)
            return {
                ...state,
                removeTicketError: null,
                boardTickets: [...newTickets]
            }
        case 'REMOVE_TICKET_ERROR':
            return {
                ...state,
                removeTicketError: action.errMsg
            }
        case 'UPDATE_VOTE':
            const index = state.boardTickets.findIndex(ticket => ticket.id === action.ticket.id);
            const prevState = [...state.boardTickets];
            prevState[index] = {...action.ticket}
            return {
                ...state,
                updateVoteError: null,
                boardTickets: [...prevState]
            }
        case 'UPDATE_VOTE_ERROR':
            return {
                ...state,
                updateVoteError: action.errMsg
            }
        case 'GET_ALL_COMMENTS':
            return {
                ...state,
                commentsError: null,
                comments: [...action.comments]
            } 
        case 'GET_ALL_COMMENTS_ERROR':
            return {
                ...state,
                commentsError: action.errMsg
            }
        case 'DELETE_COMMENT':
            const updatedComments = state.comments.filter(comment => comment.id !== action.comment)
            return {
                ...state,
                deleteCommentError: null,
                comments: [...updatedComments]
            }
        case 'DELETE-COMMENT_ERROR': 
            return {
                ...state,
                deleteCommentError: action.errMsg
            }
        case 'ADD_COMMENT':
            return {
                ...state,
                addCommentError: null,
                comments: [...state.comments, action.comment]
            }
        case 'ADD_COMMENT_ERROR':
            return {
                ...state,
                addCommentError: action.errMsg
            }                            
        default:
            return state;    
    }
}

export default boardReducer;