import React from "react";
import { connect } from "react-redux";
import ApiEngine from "../../service/ApiEngine";
import Cookies from "js-cookie";
import * as actionDispatch from "../../store/actions";
import Alert from "../Alert"


const mapStateToProps = (state) => {
    return {
        modal_post_creation_open_state: state.modal_post_creation_open_state,
        current_user: state.current_user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toogleModal: (modalOpenState) => { dispatch({ type: "CHANGE_MODAL_OPEN_STATE", payload: modalOpenState }) },
        addPost: (postDatas) => { dispatch(actionDispatch.addPost(postDatas)) },
        setAlertMessages: (alertMessages) => { dispatch(actionDispatch.setAlertMessage(alertMessages)) }
    }
}

const Modal = ({ toogleModal, modal_post_creation_open_state, current_user, addPost, setAlertMessages }) => {

    const handleClick = (event) => {
        event.preventDefault();

        toogleModal(!modal_post_creation_open_state);

    }


    // Create posts 


    const createPost = async (event) => {
        let jwt_token = Cookies.get("jwt");
        let text = document.querySelector("#post_text").value

        if (text !== "") {
            let datas = {
                text: text,
                user: current_user.id
            };
            let API_ENGINE = new ApiEngine();
            let response = await API_ENGINE.create(datas, "/posts", true, jwt_token);

            if (!response.hasOwnProperty("statusCode")) {
                
                addPost(response);

            } else {

                setAlertMessages(
                    {
                        type: "danger",
                        messages: [
                            {
                                message: "Une erreure technique est survenue veuillez contacter le service technique"
                            }
                        ]
                    }
                );
            }

        } else {
            setAlertMessages(
                {
                    type: "danger",
                    messages: [
                        {
                            message: "L'ensemble des champs doivent être remplis"
                        }
                    ]
                }
            );
        }


    }


    const modalClassActive = modal_post_creation_open_state ? "show" : "";

    return (
        <div id="modal" className={`col-lg-6 col-12 ${modalClassActive}`}>

            <div className="row text-dark">

                <h2>Rediger un post :</h2>


            </div>

            <div className="row">

                <textarea className="form-control my-4" name="post_text" id="post_text" cols="30" defaultValue="Une belle histoire commence ici..." style={{ minHeight: "30rem", padding: "2.5rem", border: "2px solid #F1E9E3" }}>

                </textarea>

            </div>

            <div className="row">
                <div className="col-lg-6 col-12">
                    <button form="form_post_creation" onClick={createPost} className="btn-secondary-color waves-effect waves-light btn-large col-9 mx-auto btn-rounded d-flex align-items-center justify-content-center my-4">valider</button>
                </div>
                <div className="col-lg-6 col-12">

                    <button onClick={handleClick} className="btn-danger-color waves-effect waves-light btn-large col-9 mx-auto btn-rounded d-flex align-items-center justify-content-center my-4">annuler</button>

                </div>
            </div>


            <Alert />


        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)