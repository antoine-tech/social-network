import React from "react";
import ApiEngine from "../../../service/ApiEngine";


const SignUp = () => {

    // handle submission of sign up form
    const handleSubmit = async  (event) =>
    {
        event.preventDefault();

        // taking values from form inputs
        let username = document.querySelector("#user_login").value
        let email = document.querySelector("#user_email").value
        let password = document.querySelector("#user_password").value

        // making an object with datas from inputs
        let userDatas ={
            username:username, 
            email:email, 
            password:password
        }

        // instanting API Wrapper
        const API_ENGINE = new ApiEngine();

        // executing request to enpoint with POST method
        
        let response = await API_ENGINE.signUp(userDatas);


        // analyze response and redirect to signIn or display errors;
    }


    return (


        <div className="container-fluid full-screen d-flex justify-content-center align-items-center bg-gradient-primary text-white">

            <form action="" method="post" className="col-12 col-md-6 col-lg-4 form-sign-actions" onSubmit={handleSubmit}>



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

                <button type="submit" className="btn btn-lg btn-success-color text-white col-12">valider</button>


            </form>


        </div>

    )
}


export default SignUp