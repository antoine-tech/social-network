import { act } from "react-dom/test-utils";

const initialState = {
    posts: [],
    current_user: {},
    jwt: "",
    loading: false,
    modal_post_creation_open_state:false,
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

const reducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
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

        case "DELETE_CURRENT_USER":

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


        case "PAGE_IS_LOADING":

            // DEBUG
            //console.log(action.payload);

            if (action.payload) {

                newState.loading = action.payload.loading;

            }

            return newState;

        case "SET_ALERT_MESSAGE":

            // DEBUG
            //console.log(newState)

            if (action.payload) {

                newState.messages = { messages: action.payload.messages, type: action.payload.type };

            }

            return newState

        case "LOAD_POSTS":

            //console.log(action.payload);

            if (action.payload) {
                newState.posts = action.payload;
            }

            return newState

        case "LOAD_MORE_POSTS":

            // console.log(action.payload)
            if (action.payload) {
                newState.posts = [...newState.posts, ...action.payload]
            }

            return newState;

        case "CHANGE_MODAL_OPEN_STATE":

            console.log(action.payload)
            newState.modal_post_creation_open_state = action.payload


            return newState
        default:
            return state;
    }
}

export default reducer;