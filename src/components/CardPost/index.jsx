import React from "react";
import * as dateHelper from "../../helpers/parseDate"
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import * as ActionDispatch from "../../store/actions"



const mapStateToProps = (state) =>
{
    return {
        current_user:state.current_user
    }
}


const mapDispatchToProps = (dispatch) =>
{
    return {
        deletePost:(id)=>dispatch(ActionDispatch.asncdDeletePost(id))
    }
}


const CardPost = ({author, like, text, created_at, updated_at, current_user, id, deletePost }) => {
    return (

        <div className="card">

            <div className="row col-12">


                <div className="col-12 col-lg-1">

                    <img src="https://www.freeiconspng.com/thumbs/twitter-icon/twitter-icon-8.png" alt="" className="avatar" />

                </div>



                <div className="col-12 col-lg-3">

                    <h5><Link to={`/users/${author.id}`}>{author.username}</Link></h5>

                </div>

                <div className="col-12 col-lg-8">

                    <h5 className="text-right">{dateHelper.parseDate(created_at)}</h5>

                </div>




            </div>


            <div className="row col-12">

                <div className="col-12 col-md-8 offset-md-4">

                    <p className="post-text">{text}</p>
                </div>

            </div>



            <div className="row col-12 d-flex justify-content-end like-and-share">

                <i class="far fa-heart fa-lg mr-4 row"><p className="ml-2">{like}</p></i>
                <i className="fas fa-search-plus fa-lg mr-4"></i>

                {
                    current_user.id === author.id && <i className="far fa-trash-alt fa-lg" onClick={()=>deletePost(id)}></i>
                }

            </div>


        </div>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(CardPost);