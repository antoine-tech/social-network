import React, { useEffect } from "react";
import { connect } from "react-redux";
import Alert from "../Alert";
import * as ActionDispatch from "../../store/actions"
import mapStateToProps from "../../store/mapperCurrentUser"

const mapDispatchToProps = (dispatch) => {
    return {
        editUser: (userDatas, userId) => { dispatch(ActionDispatch.asncEditUser(userDatas, userId)) },
        deleteUser: (userId) => { dispatch(ActionDispatch.asndeleteUser(userId)) },
        setAlertMessages: (alertMessages) => { dispatch(ActionDispatch.setAlertMessage(alertMessages)) }
    }
}

const EditForm = ({ current_user, editUser, setAlertMessages, deleteUser }) => {



    useEffect(() =>

        setAlertMessages(
            {
                type: "success",
                messages: [
                    { message: "Bienvenue sur votre espace personnel vous pouvez mettre à jour vos informations ci dessus." }
                ]
            }
        )

        , [0])


    const handleClick = (event) => {
        deleteUser(current_user.id);
    }

    const handleSubmit = (event) => {

        event.preventDefault();

        let username = document.querySelector("#user_login").value;
        let email = document.querySelector("#user_email").value;
        let password = document.querySelector("#user_password").value;
        let password_confirmation = document.querySelector("#user_password_confirmation").value;

        let userId = current_user.id;

        if (username !== "" && email !== "" && password !== "" && password_confirmation !== "") {

            if (password === password_confirmation) {
                let userDatas = {
                    username: username,
                    email: email,
                    password: password
                }

                editUser(userDatas, userId);
            } else {
                setAlertMessages(
                    {
                        type: "danger",
                        messages: [
                            { message: "Les mots de passes doivent êtres identiques" }
                        ]
                    }
                )
            }

        } else {
            setAlertMessages(
                {
                    type: "danger",
                    messages: [
                        { message: "L'ensemble des champs doivent être remplis" }
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
                <input type="text" name="user_login" id="user_login" className="form-control" defaultValue={current_user.username} />

            </div>


            <div className="form-group">

                <label htmlFor="user_email">Adresse email *</label>
                <input type="email" name="user_email" id="user_email" className="form-control" defaultValue={current_user.email} />

            </div>



            <div className="form-group">

                <label htmlFor="user_password">Mot de passe *</label>
                <input type="password" name="user_password" id="user_password" className="form-control" />

            </div>

            <div className="form-group">

                <label htmlFor="user_password_confirmation">Confirmer le mot de passe *</label>
                <input type="password" name="user_password_confirmation" id="user_password_confirmation" className="form-control" />

            </div>

            <button type="submit" className="waves-effect waves-light btn-large btn-success-color text-white col-12 my-2">valider</button>

            <a href="/" onClick={handleClick} className="waves-effect waves-light btn-large btn-danger-color text-white col-12 my-2">supprimer</a>
            
            <Alert />

        </form>




    )
}


export default connect(mapStateToProps, mapDispatchToProps)(EditForm)



