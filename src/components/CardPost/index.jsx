import React from "react";
import * as dateHelper from "../../helpers/parseDate"
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import * as ActionDispatch from "../../store/actions"

// IMAGE LOGO
import mySocialNetworkLogo from "../../assets/img/my_social_network_logo.png";

// CURRENT USER SATE STORE ACCESSOR
import mapStateToProps from "../../store/mapperCurrentUser"


const mapDispatchToProps = (dispatch) =>
{
    return {
        deletePost:(id)=>dispatch(ActionDispatch.asncdDeletePost(id)),
        updateLike:(idPost, current_user)=>dispatch(ActionDispatch.asncUpdateLike(idPost, current_user))
    }
}

const CardPost = ({likes, author, text, created_at, updated_at, current_user, id, deletePost, updateLike }) => {


    const handleLike = (id, current_user) =>
    {
        updateLike(id, current_user)
    }


    return (

        <div className="card">

            <div className="row col-12">


                <div className="col-12 col-lg-3">

                    <img src={mySocialNetworkLogo} alt="" className="avatar" />

                </div>



                <div className="col-6 col-lg-3">

                    <h5><Link to={`/users/${author.username}`}>{author.username}</Link></h5>

                </div>

                <div className="col-6">

                    <h5 className="text-right">{dateHelper.parseDate(created_at)}</h5>

                </div>




            </div>


            <div className="row col-12">

                <div className="col-12 col-md-8 offset-md-4">

                    <p className="post-text">{text}</p>
                </div>

            </div>



            <div className="row col-12 d-flex justify-content-end like-and-share">

                <i class={`${likes?.length > 0 && "text-danger"} far fa-heart fa-lg mr-4 row `} onClick={()=>handleLike(id, current_user)}><p className="ml-2">{likes?.length}</p></i>
                <i className="fas fa-search-plus fa-lg mr-4"></i>

                {
                    current_user.id === author.id && <i className="far fa-trash-alt fa-lg" onClick={()=>deletePost(id)}></i>
                }

            </div>


        </div>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(CardPost);