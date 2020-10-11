import React from 'react'
import {  Route, Redirect } from 'react-router-dom'
import PropTypes from "prop-types";

export const PublicRouter = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            component={ (props) => 
                ( isAuthenticated )
                ? ( <Redirect to='/' /> )
                : ( <Component {...props} /> )
            }
        />
    )
}

PublicRouter.prototype = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
