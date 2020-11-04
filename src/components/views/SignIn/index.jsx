import React from "react";
import { connect } from "react-redux";
import * as actionDispatch from "../../../store/actions";
import signInIllustration from "../../../assets/img/sign_in_illustration.jpg"

// handler allowing dispatch of actions and new datas to general state of redux store
const mapDispatchToProps = (dispatch) => {
    return {

        // on submission function signUser will be executed dispatching an action
        signUser: (userDatas) => dispatch(actionDispatch.asncSetCurrentUser(userDatas))
    }
}

// handler allowing access to general state of redux store
const mapStateToProps = (state) => {
    return {
        current_user: state.current_user
    };
}

const SignIn = ({ signUser, current_user }) => {

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


        <div className="container-fluid full-screen d-flex justify-content-center align-items-center text-white bg-primary-color">

            <div className="row col-12 bg-white d-flex justify-content-center align-items-center p-0">





                <div className="d-none d-md-flex col-md-6 p-0">


                    <img src={signInIllustration} className="img-fluid" alt="" />


                </div>




                <div className="col-12 col-md-6 d-flex">


                    <form action="" method="post" className="col-12 col-lg-9 form-sign-actions my-4" onSubmit={handleSubmit}>



                        <h1 className="text-center">De retour parmis nous ? </h1>


                        {JSON.stringify(current_user)}


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


                    </form>

                </div>
            </div>


        </div>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(SignIn)