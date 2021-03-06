import React from "react";
import Alert from "../Alert";

import * as actionDispatch from "../../store/actions"
import { connect } from "react-redux";

// REDUX STORE HANDLERS 


// DIPATCHING ACTION AMENDING STORE STATE
// handler allowing dispatch of actions and new datas to general state of redux store
const mapDispatchToProps = (dispatch) => {
    return {
        // on submission function signUser will be executed dispatching an action
        signUpUser: (userDatas) => dispatch(actionDispatch.asncRegisterUser(userDatas)),
    }
}
// COMPONENT

const SignUpForm = ({messages:alertMessages, signUpUser}) => {

    // handle submission of sign up form
    const handleSubmit = async (event) => {
        event.preventDefault();

        // taking values from form inputs
        let username = document.querySelector("#user_login").value
        let email = document.querySelector("#user_email").value
        let password = document.querySelector("#user_password").value

        // making an object with datas from inputs
        let userDatas = {
            username: username,
            email: email,
            password: password
        }

        signUpUser(userDatas)
    
        // analyze response and redirect to signIn or display errors;
    }

    return (

        <>

            <form action="" method="post" className="col-12 col-lg-9 form-sign-actions my-4 mx-auto" onSubmit={handleSubmit}>



                <h1 className="text-center">Bienvenue sur My Social Network</h1>


                <small>* champs obligatoires</small>

                <hr className="bg-white my-4" />



                <div className="form-group">

                    <label htmlFor="user_login">Identifiant *</label>
                    <input type="text" name="user_login" id="user_login" className="form-control" />

                </div>


                <div className="form-group">

                    <label htmlFor="user_email">Adresse email *</label>
                    <input type="email" name="user_email" id="user_email" className="form-control" />

                </div>



                <div className="form-group">

                    <label htmlFor="user_password">Mot de passe *</label>
                    <input type="password" name="user_password" id="user_password" className="form-control" />

                </div>

                <div className="form-group">

                    <label htmlFor="user_password_confirmation">Confirmer le mot de passe *</label>
                    <input type="password" name="user_password_confirmation" id="user_password_confirmation" className="form-control" />

                </div>

                <button type="submit" className="waves-effect waves-light btn-large btn-success-color text-white col-12">valider</button>



             
                    <Alert  /> 
           


            </form>



        </>
    )
}


export default connect(null, mapDispatchToProps)(SignUpForm);