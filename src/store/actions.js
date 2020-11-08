import ApiEngine from "../service/ApiEngine";
import Cookies from 'js-cookie'


// function sending (COMMAND) action wich will be interpreted by reducer function to update redux strore aka global state of APP
const setCurrentUser = (userDatas) => {
    return { type: "SET_CURRENT_USER", payload: userDatas }
}

export const setAlertMessage = (alertMessages) => {
    return {
        type: "SET_ALERT_MESSAGE", payload: alertMessages
    }
}


// LOAD 10 LAST POSTS TO INITILAIZE DOM CONTENT ON WALL VIEW
const loadPosts = (posts) => {
    return {
        type: "LOAD_POSTS",
        payload: posts
    }
}
// LOAD MORE POST ACTION TO LOAD 10 FOLLOWING POSTS EXECUTED ON CLICK LOAD MORE BUTTON
const loadMorePosts = (posts) => {
    return {
        type: "LOAD_MORE_POSTS",
        payload: posts
    }
}

// EDIT USER PROFILE
const editUser = (userDatas) => {

    return {
        type: "EDIT_CURRENT_USER",
        payload: userDatas
    }
}

const deleteUser = (userId) => {
    return {
        type: "DELETE_CURRENT_USER",
        payload: userId
    }
}

const deletePost = (postId) => {
    return {
        type: "DELETE_POST",
        payload: postId
    }
}


export const addPost = (postDatas) => {
    return {
        type: "ADD_POST",
        payload: postDatas
    }
}

export const updatePost = (postDatas) => {
    return {
        type: "UPDATE_POST",
        payload: postDatas
    }
}





// instantiating API wrapper
const API_ENGINE = new ApiEngine();


export const asncUpdateLike = (idPost, current_user) => {
    return async (dispatch) => {

        // let postDatas;
        let jwt_token = Cookies.get("jwt");
        let postLike = await API_ENGINE.find(`/likes?post=${idPost}`, true, jwt_token);


        let filteredPosts = postLike.filter((e) => e.user?.id === current_user.id)

        if (filteredPosts.length > 0) {

             await API_ENGINE.delete(`/likes/${filteredPosts[0].id}`, true, jwt_token);


        } else {

            let datas = {
                post: idPost,
                user: current_user.id
            }


           await API_ENGINE.create(datas, `/likes`, true, jwt_token);

        }


        let response = await API_ENGINE.find(`/posts/${idPost}`, true, jwt_token);

        let postLikes = await API_ENGINE.find(`/likes?post=${idPost}`, true, jwt_token);


        response.likes = postLikes

        dispatch(updatePost(response))


    }
}


export const asncdDeletePost = (postId) => {
    return async (dispatch) => {

        let jwt_token = Cookies.get("jwt");

        let response = await API_ENGINE.delete(`/posts/${postId}`, true, jwt_token);


        if (!response.hasOwnProperty("statusCode")) {
            dispatch(
                deletePost(postId)
            );
        } else {
            dispatch(
                setAlertMessage({
                    type: "danger",
                    messages: [
                        { message: "Une erreure est survenue veuillez contacter le support technique" }
                    ]
                })
            )
        }
    }
}


export const asndeleteUser = (userId) => {
    return async (dispatch) => {
        // CALL API EDIT DATAS

        let jwt_token = Cookies.get("jwt");

        let response = await API_ENGINE.delete(`/users/${userId}`, true, jwt_token);


        if (!response.hasOwnProperty("statusCode")) {
            dispatch(
                deleteUser(userId)
            );
        } else {
            dispatch(
                setAlertMessage({
                    type: "danger",
                    messages: [
                        { message: "Une erreure est survenue veuillez contacter le support technique" }
                    ]
                })
            )
        }


    }
}


export const asncEditUser = (userDatas, userId) => {
    return async (dispatch) => {
        // CALL API EDIT DATAS

        let jwt_token = Cookies.get("jwt");

        let response = await API_ENGINE.update(userDatas, `/users/${userId}`, true, jwt_token);


        if (!response.hasOwnProperty("statusCode")) {
            dispatch(
                editUser(response)
            );
        } else {
            dispatch(
                setAlertMessage({
                    type: "danger",
                    messages: response.data[0].messages
                })
            )
        }


    }
}





export const asncLoadPosts = (currentPostNumber, current_user) => {
    return async (dispatch) => {

        let jwt_token = Cookies.get("jwt");

        let response = await API_ENGINE.find(`/posts?_start=${currentPostNumber}&_limit=10&_sort=created_at:desc`, true, jwt_token);

        if (Object.keys(current_user).length > 0) {

            let postLikes = response.map(async (e) => {

                let postLike = await API_ENGINE.find(`/likes?post=${e.id}`, true, jwt_token);

                e.likes = postLike;

                return e

            })


            response = await Promise.all(postLikes);


        }
        if (response.length > 0) {

            dispatch(
                loadPosts(response)
            )
        }

    }
}

export const asncLoadMorePosts = (currentPostNumber) => {
    return async (dispatch) => {


        let jwt_token = Cookies.get("jwt");

        let response = await API_ENGINE.find(`/posts?_start=${currentPostNumber}&_limit=10`, true, jwt_token);


        let postLikes = response.map(async (e) => {

            let postLike = await API_ENGINE.find(`/likes?post=${e.id}&_sort=created_at:desc`, true, jwt_token);

            e.likes = postLike;

            return e

        })


        response = await Promise.all(postLikes);


        if (response.length > 0) {
            dispatch(
                loadMorePosts(response)
            )
        }

    }
}




// action to sign a user in and set it in global state using reduc store by propagating action and before propagation 
// send request to server to verify sign action against server and only set current user in case of positive response from srever
export const asncSetCurrentUser = (userDatas) => {

    return async (dispatch) => {

        let response = await API_ENGINE.signIn(userDatas);

        if (response.hasOwnProperty("jwt")) {


            // SETTING current_user cookie 
            Cookies.set('current_user', JSON.stringify(response.user));

            // SETTING jwt cookie
            Cookies.set('jwt', response.jwt)

            // dispatching new state to store
            dispatch(
                setCurrentUser(response)
            )

        } else {

            // DISPATCHING ALERT MESSAGES
            dispatch(
                setAlertMessage({
                    type: "danger",
                    messages: response.data[0].messages
                })
            )

        }

    }
}

export const asncRegisterUser = (userDatas) => {

    return async (dispatch) => {

        let response = await API_ENGINE.signUp(userDatas);


        if (response.hasOwnProperty("user")) {

            // DISPLAYING ALERT
            dispatch(
                setAlertMessage(
                    {
                        type: "success",
                        messages: [
                            { message: "Compte crée avec succès" }
                        ]
                    }
                )
            );


            // SIGNING USER IN

            // SETTING current_user cookie 
            Cookies.set('current_user', JSON.stringify(response.user));

            // SETTING jwt cookie
            Cookies.set('jwt', response.jwt)

            dispatch(
                setCurrentUser(response)
            )


        } else {

            dispatch(
                setAlertMessage(
                    {
                        type: "danger",
                        messages: response.data[0].messages
                    }
                )
            )

        }

    }
}








