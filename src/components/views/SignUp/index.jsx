import React from "react";

const SignUp = () =>
{
    return ( 
       
        <div className="container">

            <form action="" method="post">



                <h1>Bienvenue sur My Social Network</h1>


                <small>* champs obligatoires</small>


                <div className="form-group">

                    <label htmlFor="user_login"></label>
                    <input type="text" name="user_login" id="user_login" className="form-control" />

                </div>


                <div className="form-group">

                    <label htmlFor="user_email"></label>
                    <input type="email" name="user_email" id="user_email" className="form-control" />

                </div>



                <div className="form-group">

                    <label htmlFor="user_password"></label>
                    <input type="password" name="user_password" id="user_password" className="form-control" />

                </div>

                <div className="form-group">

                    <label htmlFor="user_password_confirmation"></label>
                    <input type="password" name="user_password_confirmation" id="user_password_confirmation" className="form-control" />

                </div>




            </form>
        </div>
    )
}


export default SignUp