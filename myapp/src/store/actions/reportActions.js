import axios from 'axios';
import types from "../actionTypes/types";

export const getReportComments = (data) => {
    return {
        type: types.GET_REPORT_COMMENTS,
        comments: data
    }
}

export const getReportCommentsError = (err) => {
    return {
        type: types.GET_REPORT_COMMENTS_ERROR,
        errMsg: err
    }
}

export const getReportCommentsAction = () => (dispatch) => {
    axios
    .get("http://localhost:8000/comments")
    .then(response => dispatch(getReportComments(response.data)))
    .catch(error => dispatch(getReportCommentsError("Could not load comment resources.")))
}

export const getReportTickets = (data) => {
    return {
        type: types.GET_REPORT_TICKETS,
        tickets: data
    }
}

export const getReportTicketsError = (err) => {
    return {
        type: types.GET_REPORT_TICKETS_ERROR,
        errMsg: err
    }
}

export const getReportTicketsAction = () => (dispatch) => {
    axios
    .get("http://localhost:8000/tickets")
    .then(response => dispatch(getReportTickets(response.data)))
    .catch(error => dispatch(getReportTicketsError("Could not load resources for tickets.")));
}