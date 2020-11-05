import React from "react";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
    return {
        modal_post_creation_open_state: state.modal_post_creation_open_state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toogleModal: (value) => { dispatch({ type: "CHANGE_MODAL_OPEN_STATE", payload:value }) }
    }
}

const Modal = ({toogleModal, modal_post_creation_open_state}) => {

    const handleClick = (event) =>
    {
        event.preventDefault();
        
        toogleModal(!modal_post_creation_open_state);

    }


    const modalClassActive = modal_post_creation_open_state ? "show": "";

    return (
        <div id="modal" className={`col-lg-6 col-12 ${modalClassActive}`}>

            <div className="header text-dark">

                <h2>Rediger un post : <small>* champs obligatoires</small></h2>


            </div>

            <div className="body">

                <textarea className="form-control my-4" name="post_text" id="post_text" cols="30" defaultValue="Une belle histoire commence ici...">
                  
                </textarea>

            </div>

            <div className="footer">


                <button form="form_post_creation" className="btn-secondary-color waves-effect waves-light btn-large col-lg-3 col-12 btn-rounded d-flex align-items-center justify-content-center my-4">valider</button>

                <button onClick={handleClick} className="btn-danger-color waves-effect waves-light btn-large col-lg-3 col-12 btn-rounded d-flex align-items-center justify-content-center my-4">annuler</button>

            </div>


        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)