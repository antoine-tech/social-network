const initialState = {
    posts: [],
    current_user: {}
}

const reducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case "SET_CURRENT_USER":


            console.log(action.payload)

            if (action.payload) {
                return newState.current_user = action.payload;
            } else {
                break;
            }

        default:
            return state;
    }
}

export default reducer;