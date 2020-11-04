import React from "react";
import { connect } from "react-redux";
import * as actionDispatch from "../../store/actions";
import Alert from "../Alert";


// handler allowing dispatch of actions and new datas to general state of redux store
const mapDispatchToProps = (dispatch) => {
    return {
        // on submission function signUser will be executed dispatching an action
        signUser: (userDatas) => dispatch(actionDispatch.asncSetCurrentUser(userDatas)),
    }
}

// handler allowing access to general state of redux store
const mapStateToProps = (state) => {
    return {
        current_user: state.current_user,
        messages: state.messages
    };
}



const SignInForm = ({ signUser, current_user, messages: alertMessages }) => {


    const handleSubmit = (event) => {

        // preventing default http request to make one using fetch API
        event.preventDefault();

        // taking value of inputs in form 
        let user_identifier = document.querySelector("#user_identifier").value;

        let user_password = document.querySelector("#user_password").value;

        // datas of form as object
        let userDatas = {
            identifier: user_identifier,
            password: user_password
        }

        // executing method passed as props thanks to connect HOC
        signUser(userDatas);

    }


    return (

        <form action="" method="post" className="col-12 col-lg-9 form-sign-actions my-4 mx-auto" onSubmit={handleSubmit}>



            <h1 className="text-center">De retour parmis nous ? </h1>
            

            <small>* champs obligatoires</small>

            <hr className="bg-white my-4" />


            <div className="form-group">

                <label htmlFor="user_identifier">Login/Adresse mail</label>
                <input type="text" name="user_identifier" id="user_identifier" className="form-control" />

            </div>


            <div className="form-group">

                <label htmlFor="user_password">Mot de passe *</label>
                <input type="password" name="user_password" id="user_password" className="form-control" />

            </div>


            <button type="submit" className="waves-effect waves-light btn-large btn-success-color text-white col-12">valider</button>


            <Alert/>
        </form>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);