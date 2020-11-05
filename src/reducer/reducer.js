import { act } from "react-dom/test-utils";

const initialState = {

    posts: [],
    current_user: {},
    jwt: "",
    loading: false,
    modal_post_creation_open_state: false,
    messages: {
        type: "success",
        messages: [
            // testing purpose
            // {
            //     message: "hello world"
            // }
        ]
    }
}

// REDUCER ALLOW ANLYSIS OF COMMAND SENT BY DIPATCHERS AND UPDATE STATE ACCORDING VALUE PASSED IN PAYLOAD KEY
const reducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {


        // SET THE CURRENT USER
        case "SET_CURRENT_USER":

            // DEBUG
            //console.log(action.payload)

            if (action.payload) {
                newState.messages = {
                    type: "success",
                    messages: [
                        { message: "Connexion reussie" }
                    ]
                }
                newState.current_user = action.payload.user
                newState.jwt = action.payload.jwt
            }

            return newState;

        
        // EDIT THE CURRENT USER
        case "EDIT_CURRENT_USER":

            // DEBUG
            // console.log(action.payload)

            if (action.payload) {

                let userDatas = { ...newState.current_user, ...action.payload }
                newState.current_user = userDatas
                newState.messages = {
                    type: "success",
                    messages: [
                        { message: "Compte mis à jour avec succès" }
                    ]
                }
            }

            return newState;

        // DELETE THE CURRENT USER
        case "DELETE_CURRENT_USER":

            // DEBUG
            // console.log(action.payload)

            if (action.payload) {

                newState.current_user = {}
                newState.messages = {
                    type: "info",
                    messages: [
                        { message: "Nous sommes désolé de vous voir partir, A bientôt peut être" }
                    ]
                }

            }

            return newState;

        // PASS PAGE STATE TO LOADING (NOT IMPLEMENTED)
        case "PAGE_IS_LOADING":

            // DEBUG
            //console.log(action.payload);

            if (action.payload) {

                newState.loading = action.payload.loading;

            }

            return newState;
        
        // SET ALERTS MESSAGES
        case "SET_ALERT_MESSAGE":

            // DEBUG
            //console.log(newState)

            if (action.payload) {

                newState.messages = { messages: action.payload.messages, type: action.payload.type };

            }

            return newState
        
        // ADD A POST TO POSTS ARRAY
        case "ADD_POST":

            // DEBUG
            //console.log(newState)

            if (action.payload) {
                newState.posts = [...newState.posts, action.payload]
            }

            return newState

        // DELETE A POST IN POST ARRAY
        case "DELETE_POST":

            // DEBUG
            //console.log(newState)

            if (action.payload) {

                newState.posts = newState.posts.filter((e) => e.id !== action.payload)
            }

            return newState


        // LOAD POSTS AT FIRST INITIALIZATION
        case "LOAD_POSTS":
            
            // DEBUG
            //console.log(newState)

            if (action.payload) {
                newState.posts = action.payload;
            }

            return newState
        
        // LOAD MORE POSTS WHEN USER CLICK ON BUTTON LOAD MORE ON /wall PAGE
        case "LOAD_MORE_POSTS":
            
            // DEBUG
            //console.log(newState)

            if (action.payload) {
                newState.posts = [...newState.posts, ...action.payload]
            }

            return newState;

        // UPDATE A POST IN THE ARRAY OF POSTS AND RETURN POSTS WITH MODIFIED ONE
        case "UPDATE_POST":
           
            // DEBUG
            //console.log(newState)

            if (action.payload) {

                newState.posts = [...newState.posts.filter((e)=>e.id!==action.payload.id), action.payload]
            }

            return newState
        
        // CHANGE OPEN STATE OF MODAL 
        case "CHANGE_MODAL_OPEN_STATE":

            // DEBUG
            //console.log(newState)

            newState.modal_post_creation_open_state = action.payload

            return newState
        default:
            return state;
    }
}

export default reducer;