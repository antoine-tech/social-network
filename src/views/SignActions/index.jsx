import React from "react";



const SignActions = ({ component: Component, imageSrc, ...props }) => {

    return (


        <div className="container-fluid full-screen d-flex justify-content-center align-items-center text-white bg-primary-color">

            <div className="row col-12 bg-white d-flex justify-content-center align-items-center p-0">


                <div className="col-12 col-md-6">


                    <Component />


                </div>


                <div className="d-none d-md-block col-md-6 p-0">



                    <img src={imageSrc} className="img-fluid" alt="" />


                </div>



            </div>


        </div>

    )
}


export default SignActions;