import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import * as currentUser from "../../helpers/currentUser";

// ACCESSING CURRENT STATE OF REDUX STORE
import mapStateToProps from "../../store/mapperCurrentUser"

// COMPONENT HELPING KEEPING CODE DRY BY OVERLOADING PROPS IN IT AND MAKING TERNARY CONDITION ONDISPLAY OR REDIRECT ACTION
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