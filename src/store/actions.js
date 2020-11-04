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


const loadPosts = (posts) => {
    return {
        type: "LOAD_POSTS",
        payload: posts
    }
}

const loadMorePosts = (posts) => {
    return {
        type: "LOAD_MORE_POSTS",
        payload: posts
    }
}



// instantiating API wrapper
const API_ENGINE = new ApiEngine();


export const asncLoadPosts = (currentPostNumber) => {
    return async (dispatch) => {
        let response = await API_ENGINE.find(`/posts?_start=${currentPostNumber}&_limit=10`);

        if (response.length > 0) {
            dispatch(
                loadPosts(response)
            )
        }else{
            // pas de datas to dislay create a post ?
        }

    }
}

export const asncLoadMorePosts = (currentPostNumber) => {
    return async (dispatch) => {
        let response = await API_ENGINE.find(`/posts?_start=${currentPostNumber}&_limit=10`);

        if (response.length > 0) {
            dispatch(
                loadMorePosts(response)
            )
        }else{
            // pas de datas to dislay create a post ?
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
            Cookies.set('jwt',response.jwt)

            // dispatching new state to store
            dispatch(
                setCurrentUser(response)
            )

        } else {

            //display error

        }

    }
}

export const asncRegisterUser = (userDatas) => {

    return async (dispatch) => {

        let response = await API_ENGINE.signUp(userDatas);



        if (response.hasOwnProperty("user")) {


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








