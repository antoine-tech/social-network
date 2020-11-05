import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// COMPONENTS

// NAVBAR
import Navigation from "../Navigation"

// HOC FOR PRIVATE ROUTING
import PrivateRoute from "../PrivateRoute";

// VIEWS
import Home from "../views/Home";
import Wall from "../Wall";
import SignActions from "../views/SignActions";
import SignInForm from "../SignInForm/"
import SignUpForm from "../SignUpForm/"
import UserProfile from "../UserProfile";
import EditForm from "../EditForm";

// HELPERS
import { isUserLoggedIn } from "../../helpers/currentUser";

// IMAGES
import signInIllustration from "../../assets/img/sign_in_illustration.jpg";
import signUpIllustration from "../../assets/img/sign_up_illustration.jpg";
import editIllustration from "../../assets/img/edit_illustration.jpg";

import mapStateToProps from "../../store/mapperCurrentUser"


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
                        isUserLoggedIn(current_user) ? <SignActions component={EditForm} imageSrc={editIllustration} />  : <Redirect to={"/login"} />

                    }

                </Route>



                <PrivateRoute path={"/wall"} component={Wall} redirectPathObj={{ pathname: "/login" }} />


                <PrivateRoute path={"/users/:id"} component={UserProfile} redirectPathObj={{ pathname: "/login" }} />


            </Switch>


        </Router>
    )
}

export default connect(mapStateToProps)(App)