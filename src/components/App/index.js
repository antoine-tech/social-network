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
                        isUserLoggedIn(current_user) ? <Redirect to={"/sign-in"} /> : <SignActions component={SignUpForm} imageSrc={signInIllustration} />

                    }

                </Route>



                <Route path={"/account"}>

                    {
                        isUserLoggedIn(current_user) ? <SignActions component={EditForm} imageSrc={editIllustration} />  : <Redirect to={"/sign-in"} />

                    }

                </Route>



                <PrivateRoute path={"/wall"} component={Wall} redirectPathObj={{ pathname: "/sign-in" }} />


                <PrivateRoute path={"/users/:id"} component={UserProfile} redirectPathObj={{ pathname: "/sign-in" }} />


            </Switch>


        </Router>
    )
}

export default connect(mapStateToProps)(App)