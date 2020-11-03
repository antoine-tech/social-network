import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import * as currentUser from "../../helpers/currentUser";

// HOC allowing us to decide wheter or not rendering view

const mapStateToProps = (state) => {
    return {
        current_user: state.current_user
    }
}

const PrivateRoute = ({ component: Component, redirectPathObj, current_user, ...props }) => {


    return (
        currentUser.isUserLoggedIn(current_user) ?
            (

                <Route {...props}>

                    <Component />

                </Route>

            ) :
            (
                <Redirect to={redirectPathObj} />
            )
    )
}

export default connect(mapStateToProps)(PrivateRoute);