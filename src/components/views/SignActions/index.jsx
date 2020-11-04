import React from "react";
import { connect } from "react-redux";
import * as actionDispatch from "../../../store/actions";



const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}

const SignActions = ({ component: Component, imageSrc, messages, ...props }) => {

    return (


        <div className="container-fluid full-screen d-flex justify-content-center align-items-center text-white bg-primary-color">

            <div className="row col-12 bg-white d-flex justify-content-center align-items-center p-0">





                <div className="d-none d-md-block col-md-6 p-0">

                    {
                        console.log(messages)
                    }
                    <Component messages={messages} />



                </div>




                <div className="col-12 col-md-6">



                    <img src={imageSrc} className="img-fluid" alt="" />



                </div>




            </div>


        </div>

    )
}


export default connect(mapStateToProps)(SignActions);