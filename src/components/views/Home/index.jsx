import React from "react"
import imageHome from "../../../assets/img/home_illustration.png";
import { Link } from "react-router-dom"
import Feed from "../../Feed";

const Home = () => {
    return (



        <div className="container-fluid full-screen d-flex justify-content-center align-items-center text-white bg-primary-color">

            <div className="row col-12 bg-white p-0" style={{ minHeight: "80vh" }} id="home-title-container">

                <div className="overlay-light row col-12  d-flex justify-content-center align-items-center">

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


                    <div className="d-none d-lg-flex col-lg-6 p-0 justify-content-center align-items-center">


                        <Feed classesStyles={["col-9", "d-flex", "align-items-center"]} />


                    </div>


                </div>

            </div>


        </div>

    )
}

export default Home;