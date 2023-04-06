import types from '../actionTypes/types';
import axios from 'axios';

export const loginErrorMessage = () => {
    return {
        type: types.LOGIN_ERROR,
        errorMessage: 'User does not exists.'
    }
}

export const loginUser = (data) => {
    return {
        type: types.LOGIN,
        user: data
    }
}

export const loginAction = (data,setLoggedIn) =>  async(dispatch) => {
    axios
    .post("http://localhost:8000/login", data)
    .then(response => {
        setLoggedIn(response.data.accessToken);
        localStorage.setItem('token', response.data.accessToken);
        localStorage.setItem('logged_user', response.data.user.id);
        dispatch(loginUser(response.data.user));
        window.location ="/home";
    })
    .catch(error => {
        dispatch(loginErrorMessage());
    });
}

export const registerUser = (data) => {
    return {
        type: types.REGISTER,
        user: data
    }
}

export const registerErrorMessage = () => {
    return {
        type: types.REGISTER_ERROR,
        errorMessage: 'Could not create user.'
    }
}

export const registerAction = (data, setLoggedIn) => async(dispatch) => {
    axios
    .post("http://localhost:8000/users", data)
    .then(response => {
        setLoggedIn(response.data.accessToken);
        localStorage.setItem('token', response.data.accessToken);
        localStorage.setItem('logged_user', response.data.user.id);
        dispatch(registerUser(response.data.user));
        window.location ="/home";
    })
    .catch(error => {
        dispatch(registerErrorMessage);
    })
}

export const logoutAction = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('logged_user');
    return {
        type: 'LOGOUT'
    }
}
