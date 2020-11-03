import React from "react";
import { connect } from "react-redux";
import * as actionDispatch from "../../../store/actions"

const mapDispatchToProps = (dispatch) => {
    return {
        signUser: (userDatas) => dispatch(actionDispatch.asncSetCurrentUser(userDatas))
    }
}

const mapStateToProps = (state) => {
    return {
        current_user:state.current_user
    };
}

const SignIn = ({ signUser, current_user }) => {

    const handleSubmit = (event) => {
        event.preventDefault();

        let user_identifier = document.querySelector("#user_identifier").value;

        let user_password = document.querySelector("#user_password").value;

        let userDatas = {
            identifier: user_identifier,
            password: user_password
        }

        signUser(userDatas);

    }
    
    return (

        <div className="container-fluid full-screen d-flex justify-content-center align-items-center bg-gradient-primary text-white">

            <form action="" method="post" className="col-12 col-md-6 col-lg-4" onSubmit={handleSubmit}>



                <h1 className="font-weight-bold">De retour parmis nous ? </h1>


                {JSON.stringify(current_user)}


                <hr className="bg-white my-4" />


                <small>* champs obligatoires</small>


                <div className="form-group">

                    <label htmlFor="user_identifier">Login/Adresse mail</label>
                    <input type="text" name="user_identifier" id="user_identifier" className="form-control" />

                </div>


                <div className="form-group">

                    <label htmlFor="user_password">Mot de passe *</label>
                    <input type="password" name="user_password" id="user_password" className="form-control" />

                </div>


                <button type="submit" className="btn btn-lg btn-success-color text-white col-12">valider</button>


            </form>


        </div>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(SignIn)