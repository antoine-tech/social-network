import React from "react";
import Feed from "../Feed";
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import Modal from "../Modal";


const mapDispatchToProps = (dispatch) => {
    return {
        toogleModal: (value) => { dispatch({ type: "CHANGE_MODAL_OPEN_STATE", payload:value }) }
    }
}

const mapStateToProps = (state) => {
    return {
        modal_post_creation_open_state: state.modal_post_creation_open_state
    }
}


const Wall = ({ toogleModal, modal_post_creation_open_state}) => {


    const handleClick = (event) =>
    {
        event.preventDefault();
        
        toogleModal(!modal_post_creation_open_state);
    }

    return (

        <div className="container-fluid full-screen d-flex justify-content-center align-items-center text-white bg-primary-color relative">

            <div className="container-fluid full-screen row col-12 offset-top-10 px-0 rounded">


                <div className="d-none d-lg-block col-lg-3">


                    <a href="/" onClick={handleClick} className="btn-secondary-color waves-effect waves-light btn-large col-md-9 col-12 btn-rounded m-4 d-flex align-items-center justify-content-center">PUBLIER </a>


                    <Link to="/profile" className="btn-secondary-color waves-effect waves-light btn-large col-md-9 col-12 btn-rounded m-4 d-flex align-items-center justify-content-center">MON COMPTE</Link>

                </div>

                <Feed classesStyles={["col-12", "col-lg-6"]}  />


                <div className="d-none d-lg-block col-lg-3">


                </div>


            </div>

            <Modal />

        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Wall);