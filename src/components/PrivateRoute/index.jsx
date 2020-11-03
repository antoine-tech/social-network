import React from "react";
import { Route, Redirect } from "react-router-dom";
import User from "../../service/User";

// HOC allowing us to decide wheter or not rendering view

const PrivateRoute = ({ component: Component, redirectPathObj, ...props }) => {

    let render = User.isUserLoggedIn() ? 
    (

        <Route {...props}>

            <Component />

        </Route>

    ) : 
    (
        <Redirect to={redirectPathObj} />
    )


    return render;
}

export default PrivateRoute;