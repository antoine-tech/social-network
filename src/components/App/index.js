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
import Wall from "../Wall";

import SignInForm from "../SignInForm/"
import SignUpForm from "../SignUpForm/"

import SignActions from "../views/SignActions";

import signInIllustration from "../../assets/img/sign_in_illustration.jpg";
import signUpIllustration from "../../assets/img/sign_up_illustration.jpg";


const App = () => {

    return (
        <Router>


            <Navigation />

            <Switch>

                <Route exact path={"/"} component={Home} />


                <Route path={"/sign-in"}>
                    <SignActions component={SignInForm} imageSrc={signUpIllustration} />
                </Route>



                <Route path={"/sign-up"}>

                    <SignActions component={SignUpForm} imageSrc={signInIllustration} />
                </Route>



                <PrivateRoute path={"/account"} component={Account} redirectPathObj={{ pathname: "/sign-in" }} />



                <PrivateRoute path={"/wall"} component={Wall} redirectPathObj={{ pathname: "/sign-in" }} />


            </Switch>


        </Router>
    )
}

export default App