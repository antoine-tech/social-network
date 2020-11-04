import React from "react";
import Feed from "../Feed";

const Wall = () => {
    return (

        <div className="container-fluid full-screen d-flex justify-content-center align-items-center text-white bg-primary-color">

            <div className="container-fluid full-screen row col-12 offset-top-10 px-0 rounded">


                <div className="d-none d-lg-block col-lg-3">


                    <button className="btn-secondary-color waves-effect waves-light btn-large col-md-9 col-12 btn-rounded m-4 d-flex align-items-center justify-content-center">PUBLIER </button>


                    <button className="btn-secondary-color waves-effect waves-light btn-large col-md-9 col-12 btn-rounded m-4 d-flex align-items-center justify-content-center">MON COMPTE</button>


                </div>


                <Feed />


                <div className="d-none d-lg-block col-lg-3">


                </div>


            </div>
        </div>
    )
}

export default Wall;