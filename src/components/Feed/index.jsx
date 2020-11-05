import React, { useEffect } from "react";
import { connect } from "react-redux";
import CardPost from "../CardPost";
import * as actionDispatch from "../../store/actions"
import { Link } from "react-router-dom";



// method to access posts state in store
const mapStateToProps = (state) => {
    return {
        posts: state.posts
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
    }
}

const Feed = ({ posts, loadPosts, loadMorePosts }) => {


    // USE EFFECT TARGETING ON COMPONENT WILL MOUNT LIFECYCLE HOOK
    // PASSING loadPOST as array dependency as reference wont change over time
    useEffect(() => {


        loadPosts()


    }, [loadPosts])


    const handleClick = (event) => {

        let postNumber = posts.length;
        loadMorePosts(postNumber);
    }


    return (

        <div className="col-12 col-lg-6 d-flex flex-direction justify-content-center align-items-center" id="feed-container">



            {
                posts.length > 0 &&
                (
                    <div className="overflow-auto">

                        {
                            posts.map((e) => {
                                let { id, like, created_at, updated_at, user, text } = e;
                                return <CardPost key={id} author={user} like={like} text={text} created_at={created_at} updated_at={updated_at} />
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

                                <Link to="/posts/create" className="btn-secondary-color waves-effect waves-light btn-large col-md-4 col-12 btn-rounded m-4">REDIGER</Link>
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