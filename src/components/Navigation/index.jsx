import React, { useState, useContext } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

// HELPER TO CHECK WETHER CURRENT USER IS SET
import * as currentUser from "../../helpers/currentUser";



// ACCESSING CURRENT STATE OF REDUX STORE USING CONNECT HOC
const mapStateToProps = (state) => {
    return {
        current_user: state.current_user
    }
}


const Navigation = ({ current_user }) => {


    const [isMenuToogled, setIsMenuToogled] = useState(false);


    const handleToogleMenu = (event) => {
        setIsMenuToogled(!isMenuToogled);

        const menu = document.querySelector(event.target.dataset.target)

        isMenuToogled ? menu.classList.add('show') : menu.classList.remove('show');

    }


    return (

        <>
            <nav className="navbar bg-primary-color absolute-top navbar-dark">


                <NavLink exact to="/" active className="active text-white font-weight-bold">My Social Network</NavLink>


                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation-menu"
                    aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" onClick={(event) => handleToogleMenu(event)} data-target="#navigation-menu"></span>
                </button>


            </nav>


            <div className="menu-left" id="navigation-menu">

                <i class="fas fa-times fa-2x" id="close" onClick={(event) => handleToogleMenu(event)} data-target="#navigation-menu"></i>

                <ul>

                    <li>
                        <NavLink exact to="/" active className="active">Accueil</NavLink>
                    </li>

                    {   // CHECKING WETHER USER IS LOGGED IN TO DISPLAY LINK ACCORDINGLY
                        currentUser.isUserLoggedIn(current_user) ?

                            (
                                <>


                                    <li>
                                        <NavLink exact to="/" active className="active">Mon mur</NavLink>
                                    </li>

                                </>
                            )
                            :
                            (
                                <>

                                    <li>
                                        <NavLink exact to="/sign-up" active className="btn btn-lg btn-success-color  my-2">Inscription</NavLink>

                                    </li>

                                    <li>
                                        <NavLink exact to="/sign-in" active className="btn btn-lg btn-success-color my-2">Connexion</NavLink>
                                    </li>

                                </>
                            )


                    }


                </ul>


            </div>

        </>


    )
}


export default connect(mapStateToProps)(Navigation);