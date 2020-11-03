import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// COMPONENTS

// NAVBAR

import Navigation from "../Navigation"

// HOC FOR PRIVATE ROUTING
import PrivateRoute from "../PrivateRoute";
import Account from "../views/Account";
// VIEWS
import Home from "../views/Home";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";
import Wall from "../Wall";

const App = () => {
    return (
        <Router>


            <Navigation/>

            <Switch>

                <Route exact path={"/"} component={Home}/>


                <Route path={"/sign-in"} component={SignIn} />



                <Route path={"/sign-up"} component={SignUp} />



                <PrivateRoute path={"/account"} component={Account} redirectPathObj={{ pathname: "/sign-in" }} />



                <PrivateRoute path={"/wall"} component={Wall} redirectPathObj={{ pathname: "/sign-in" }} />


            </Switch>


        </Router>
    )
}

export default App