import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";


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
import { isUserLoggedIn } from "../../helpers/currentUser";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
    return {
        current_user: state.current_user
    }
}


const App = ({ current_user }) => {

    return (

        <Router>


            <Navigation />

            <Switch>

                <Route exact path={"/"} component={Home} />


                <Route path={"/sign-in"}>

                    {
                        isUserLoggedIn(current_user) ? <Redirect to={"/wall"} /> : <SignActions component={SignInForm} imageSrc={signUpIllustration} />

                    }


                </Route>



                <Route path={"/sign-up"}>

                    {
                        isUserLoggedIn(current_user) ? <Redirect to={"/sign-in"} /> :   <SignActions component={SignUpForm} imageSrc={signInIllustration} />

                    }

                </Route>



                <PrivateRoute path={"/account"} component={Account} redirectPathObj={{ pathname: "/sign-in" }} />



                <PrivateRoute path={"/wall"} component={Wall} redirectPathObj={{ pathname: "/sign-in" }} />


            </Switch>


        </Router>
    )
}

export default connect(mapStateToProps)(App)