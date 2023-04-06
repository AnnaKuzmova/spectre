import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({loggedIn, component: Component, ...rest }) => {
    return (
        <Route {...rest} render={(props)=>{
            return loggedIn? <Component /> : <Redirect to={{pathname: "/home", state: {from: props.location}}} />
        }} />
    )
}

export default ProtectedRoute;