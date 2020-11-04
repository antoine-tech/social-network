const initialState = {
    posts: [],
    current_user: {},
    jwt: "",
    loading: false,
    messages:{
        type:"danger",
        messages: [
            {message:"hello world"}
        ]
    }
   
}

const reducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case "SET_CURRENT_USER":


            console.log(action.payload)

            if (action.payload) {
                newState.current_user = action.payload.user
                newState.jwt = action.payload.jwt
            }

            return newState;

        case "PAGE_IS_LOADING":

            //console.log(action.payload);

            if (action.payload) {

                newState.loading = action.payload.loading;

            }

            return newState;

        case "SET_ALERT_MESSAGE":

            console.log(action.payload);

            if (action.payload) {

                newState.messages = action.payload.messages;

            }

            return newState


        default:
            return state;
    }
}

export default reducer;