import React from "react";
import {NavLink} from "react-router-dom"
import error from "../../assets/img/error_404.png";

const ErrorPage = (props) => {
    return (

        <div className="container-fluid full-screen d-flex flex-column justify-content-center align-items-center text-white bg-primary-color">

            <img src={error} alt="error 404 illustration"/>


            <NavLink className="waves-effect waves-light btn-large btn-secondary-color text-white col-lg-3 col-md-6 col-12 my-2" exact to="/" active ><i class="fas fa-home mr-4"></i>Accueil</NavLink>

        </div>


    )
}

export default ErrorPage;