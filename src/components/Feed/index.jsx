import React, { useEffect } from "react";
import { connect } from "react-redux";
import CardPost from "../CardPost";
import * as actionDispatch from "../../store/actions"
import { Link } from "react-router-dom";




// method to access posts state in store
const mapStateToProps = (state) => {
    return {
        posts: state.posts, 
        modal_post_creation_open_state: state.modal_post_creation_open_state
    }
}

// Method to dispatch action to update store
const mapDispatchToProps = (dispatch) => {
    return {
        loadPosts: (currentPostNumber = 0) => dispatch(
            actionDispatch.asncLoadPosts(currentPostNumber)
        ),
        loadMorePosts: (currentPostNumber) => dispatch(
            actionDispatch.asncLoadMorePosts(currentPostNumber)
        ),
        toogleModal: (value) => { dispatch({ type: "CHANGE_MODAL_OPEN_STATE", payload:value }) }
    }
}

const Feed = ({ posts, loadPosts, loadMorePosts, toogleModal, modal_post_creation_open_state }) => {


    // USE EFFECT TARGETING ON COMPONENT WILL MOUNT LIFECYCLE HOOK
    // PASSING loadPOST as array dependency as reference wont change over time
    useEffect(() => {


        loadPosts()


    }, [loadPosts])


    const handleClick = (event) => {

        let postNumber = posts.length;
        loadMorePosts(postNumber);
    }

    const openModal = (event) =>
    {
        event.preventDefault();
        
        toogleModal(!modal_post_creation_open_state);
    }



    return (

        <div className="col-12 col-lg-6" id="feed-container">


            {
                posts.length > 0 &&
                (
                    <div className="overflow-auto">

                        {
                            posts.map( (e) => {
                                let {likes, id, created_at, updated_at, user, text } = e;
                                return <CardPost likes={likes} key={id} id={id} author={user} text={text} created_at={created_at} updated_at={updated_at} />
                            })
                        }

                    </div>
                )

            }



            <div className="row col-12 px-4 d-flex align-items-center justify-content-center">

                {
                    posts.length === 0 ?


                        (
                            <>
                                <h3 className="text-dark">Pas de posts pour le moment ... </h3>

                                <button onClick={openModal} className="btn-secondary-color waves-effect waves-light btn-large col-md-4 col-12 btn-rounded m-4">REDIGER</button>
                            </>
                        )

                        :

                        (

                            <button onClick={handleClick} className="btn-secondary-color waves-effect waves-light btn-large col-md-4 col-12 btn-rounded m-4">VOIR <sup>+</sup></button>


                        )


                }




            </div>


        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);