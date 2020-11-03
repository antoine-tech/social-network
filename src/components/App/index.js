import React from "react";
import { BrowserRouter as Router, Switch} from "react-router-dom";
// HOC FOR PRIVATE ROUTING
import PrivateRoute from "../PrivateRoute";
// VIEWS
import Home from "../views/Home";

const App = () => {
    return (
        <Router>

            <Switch>

                <PrivateRoute exact path={"/"} component={Home} redirectPathObj={{pathname:"/sign_in"}}/>

                

                <PrivateRoute path={"/sign-in"}/>

                

                <PrivateRoute path={"/sign-up"}/>

                

                <PrivateRoute path={"/account"}/>

                

                <PrivateRoute path={"/wall"}/>

                

            </Switch>


        </Router>
    )
}

export default App