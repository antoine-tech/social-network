import React from "react";
import { connect } from "react-redux";
import Alert from "../Alert";
import * as ActionDispatch from "../../store/actions"

const mapStateToprops = (state) => {
    return {
        current_user: state.current_user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editUser: (userDatas) => { dispatch(ActionDispatch.asncEditUser(userDatas)) },
        setAlertMessages: (alertMessages) => { dispatch(ActionDispatch.setAlertMessage(alertMessages)) }
    }
}
const EditForm = ({ current_user, editUser, setAlertMessages }) => {

    const handleSubmit = (event) => {

        event.preventDefault();

        let username = document.querySelector("#user_login").value;
        let email = document.querySelector("#user_email").value;
        let password = document.querySelector("#user_password").value;
        let password_confirmation = document.querySelector("#user_password_confirmation").value;

        if (password === password_confirmation) {
            let userDatas = {
                username: username,
                email: email,
                password: password
            }

            editUser(userDatas)
        } else {
            setAlertMessages(
                {
                    type: "success",
                    messages: [
                        { message: "Les mots de passes doivent êtres identiques" }
                    ]
                }
            )
        }

    }

    return (

        <form action="" method="post" className="col-12 col-lg-9 form-sign-actions my-4 mx-auto" onSubmit={handleSubmit}>

            <h1 className="text-center">Mettre à jour mes informations :</h1>


            <small>* champs obligatoires</small>

            <hr className="bg-white my-4" />


            <div className="form-group">

                <label htmlFor="user_login">Identifiant *</label>
                <input type="text" name="user_login" id="user_login" className="form-control" value={current_user.username} />

            </div>


            <div className="form-group">

                <label htmlFor="user_email">Adresse email *</label>
                <input type="email" name="user_email" id="user_email" className="form-control" value={current_user.email} />

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


            <Alert />

        </form>
    )
}


export default connect(mapStateToprops, mapDispatchToProps)(EditForm)



