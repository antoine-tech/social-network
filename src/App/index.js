import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import * as actionDispatch from "../store/actions";

// COMPONENTS

// NAVBAR
import Navigation from "../components/Navigation"

// HOC FOR PRIVATE ROUTING
import PrivateRoute from "../components/PrivateRoute";

// VIEWS
import Home from "../views/Home";
import Wall from "../components/Wall";
import SignActions from "../views/SignActions";
import SignInForm from "../components/SignInForm"
import SignUpForm from "../components/SignUpForm"
import UserProfile from "../components/UserProfile";
import EditForm from "../components/EditForm";

// HELPERS
import { isUserLoggedIn } from "../helpers/currentUser";

// IMAGES
import signInIllustration from "../assets/img/sign_in_illustration.jpg";
import signUpIllustration from "../assets/img/sign_up_illustration.jpg";
import editIllustration from "../assets/img/edit_illustration.jpg";

import mapStateToProps from "../store/mapperCurrentUser"
import ErrorPage from "../views/ErrorPage";


const App = ({ current_user }) => {


    return (

        <Router>


            <Navigation />

            <Switch>

                <Route exact path={"/"} component={Home} />


                <Route path={"/login"}>

                    {
                        isUserLoggedIn(current_user) ? <Redirect to={"/wall"} /> : <SignActions component={SignInForm} imageSrc={signUpIllustration} />

                    }


                </Route>



                <Route path={"/register"}>

                    {
                        isUserLoggedIn(current_user) ? <Redirect to={"/login"} /> : <SignActions component={SignUpForm} imageSrc={signInIllustration} />

                    }

                </Route>



                <Route path={"/profile"}>

                    {
                        isUserLoggedIn(current_user) ? <SignActions component={EditForm} imageSrc={editIllustration} /> : <Redirect to={"/login"} />

                    }

                </Route>



                <PrivateRoute path={"/wall"} component={Wall} redirectPathObj={{ pathname: "/login" }} />


                <PrivateRoute path={"/users/:id"} component={UserProfile} redirectPathObj={{ pathname: "/login" }} />

                <Route path="/error">


                    <ErrorPage />


                </Route>


                <Redirect to="/error"></Redirect>

            </Switch>


        </Router>
    )
}

export default connect(mapStateToProps)(App)