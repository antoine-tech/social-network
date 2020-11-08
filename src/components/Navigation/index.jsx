import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";

// ACCESSING CURRENT STATE OF REDUX STORE USING CONNECT HOC
import mapStateToProps from "../../store/mapperCurrentUser"

// HELPER TO CHECK WETHER CURRENT USER IS SET
import * as currentUser from "../../helpers/currentUser";

// IMAGE LOGO
import mySocialNetworkLogo from "../../assets/img/my_social_network_logo.png";


const Navigation = ({ current_user }) => {


    const [isMenuToogled, setIsMenuToogled] = useState(false);


    const handleToogleMenu = (event) => {

        setIsMenuToogled(!isMenuToogled);

        const menu = document.querySelector("#navigation-menu");

        isMenuToogled ? menu.classList.add('show') : menu.classList.remove('show');

    }

    const handleSignOut = (event) =>{
        event.preventDefault();
        Cookies.remove('current_user');
        Cookies.remove('jwt_token');

        window.location.href = "/"
    }


    return (

        <>
            <nav className="navbar bg-primary-color absolute-top navbar-dark">


                <NavLink exact to="/" onClick={(event) => handleToogleMenu(event)} className="active text-white font-weight-bold"><img src={mySocialNetworkLogo} alt="logo" className="nav-brand"/></NavLink>


                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation-menu"
                    aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" onClick={(event) => handleToogleMenu(event)} data-target="#navigation-menu"></span>
                </button>


            </nav>


            <div className="menu-left" id="navigation-menu">

                <i className="fas fa-times fa-2x" id="close" onClick={(event) => handleToogleMenu(event)} data-target="#navigation-menu"></i>

                <ul>

                    <div>

                        <li>
                            <NavLink onClick={(event) => handleToogleMenu(event)} exact to="/" className="active"><i className="fas fa-home mr-4"></i>Accueil</NavLink>
                        </li>

                        {   // CHECKING WETHER USER IS LOGGED IN TO DISPLAY LINK ACCORDINGLY
                            currentUser.isUserLoggedIn(current_user) ?

                                (


                                    <>
                                        <li>
                                            <NavLink onClick={(event) => handleToogleMenu(event)} exact to="/wall" ><i className="fas fa-comment-alt mr-4"></i>Mon mur</NavLink>
                                        </li>
                                        <li>
                                            <NavLink onClick={(event) => handleToogleMenu(event)} exact to="/profile"><i className="fas fa-user mr-4"></i>Mon compte</NavLink>
                                        </li>
                                        <li>
                                            <NavLink onClick={(event) => handleSignOut(event)} exact to="/sign-out" ><i className="fas fa-power-off mr-4"></i>Deconnexion</NavLink>
                                        </li>


                                        <li>
                                            <NavLink to="/wall" className="btn-success-color waves-effect waves-light btn-large col-12 btn-rounded my-4">PUBLIER</NavLink>
                                        </li>

                                    </>
                                )
                                :
                                (
                                    <>

                                        <li>
                                            <NavLink onClick={(event) => handleToogleMenu(event)} exact to="/register" ><i className="fas fa-pen mr-4"></i>Inscription</NavLink>

                                        </li>

                                        <li>
                                            <NavLink onClick={(event) => handleToogleMenu(event)} exact to="/login" ><i className="far fa-hand-spock mr-4"></i>Connexion</NavLink>
                                        </li>

                                    </>

                                )





                        }

                    </div>

                </ul>


            </div>
        </>


    )
}


export default connect(mapStateToProps)(Navigation);