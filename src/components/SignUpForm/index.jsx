import React from "react";
import ApiEngine from "../../service/ApiEngine";
import Alert from "../Alert";

const SignUpForm = ({messages:alertMessages}) => {


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

        // instanting API Wrapper
        const API_ENGINE = new ApiEngine();

        // executing request to enpoint with POST metho

        let response = await API_ENGINE.signUp(userDatas);

        // DEBUG
        console.log(response)


        if (response.hasOwnProperty("jwt") && response.hasOwnProperty("user")) {
            // redirect to sigIn page + Alert subscription ok // to store
            // setAlertMessages({
            //     messages: [{ message: "Compte crée avec succès" }],
            //     type: "success"
            // });
        } else {

            // alert subscription error displaying messages from api // TO store
            // setAlertMessages({
            //     messages: response.data[0].messages,
            //     type: "danger"
            // })

        }


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




                {

                    alertMessages ? <Alert messages={alertMessages.messages} type={alertMessages.type} /> : null
                }


            </form>



        </>
    )
}


export default SignUpForm;