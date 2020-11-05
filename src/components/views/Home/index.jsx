import React from "react"
import imageHome from "../../../assets/img/home_illustration.png";
import { Link } from "react-router-dom"

const Home = () => {
    return (



        <div className="container-fluid full-screen d-flex justify-content-center align-items-center text-white bg-primary-color">

            <div className="row col-12 bg-white d-flex justify-content-center align-items-center p-0" style={{ minHeight: "80vh" }}>


                <div className="col-12 col-md-6">
                  
                        <h1 className="text-dark">
                            Bienvenue sur My Social Network <sup>&copy;</sup>.
                             React Redux & Cie
                        </h1>


                    <div className="row d-flex flex-wrap col-12 justify-content-center-md">

                        <Link to="/register" className="btn-secondary-color waves-effect waves-light btn-large col-md-4 col-12 btn-rounded m-4 d-flex align-items-center justify-content-center">Inscription</Link>

                        <Link to="/login" className="btn-success-color waves-effect waves-light btn-large col-md-4 col-12 btn-rounded m-4 d-flex align-items-center justify-content-center">Connexion</Link>

                    </div>

                </div>


                <div className="d-none d-md-flex col-md-6 p-0 justify-content-center align-items-center">


                    <img src={imageHome} className="img-fluid" alt="home illustration" />


                </div>



            </div>


        </div>

    )
}

export default Home;