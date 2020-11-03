const initialState = {
    posts : [],
    current_user:{}
}

const reducer = (state=initialState, action) =>
{
    const newState = {...state};

    switch (action.type) {
        case "CREATE_POST":
            
            break;
        case "UPDATE_POST":
            
            break;
        
        case "SIGN_IN_USER":

            break;
    
        default:
            return state;
    }
}

export default reducer;