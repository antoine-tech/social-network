import ApiEngine from "../service/ApiEngine";


// function sending (COMMAND) action wich will be interpreted by reducer function to update redux strore aka global state of APP
const setCurrentUser = (userDatas) => {
    return { type: "SET_CURRENT_USER", payload: userDatas }
}

// instantiating API wrapper
const API_ENGINE = new ApiEngine();


// action to sign a user in and set it in global state using reduc store by propagating action and before propagation 
// send request to server to verify sign action against server and only set current user in case of positive response from srever
export const asncSetCurrentUser = (userDatas) => {

    return async (dispatch) => {

        let response = await API_ENGINE.signIn(userDatas);

        if (response.hasOwnProperty("jwt")) {
            dispatch(
                setCurrentUser(response)
            )
        }else{

            //display error

        }

    }
}


export const setAlertMessage = (alertMessages) =>
{
    return {
        type: "SET_ALERT_MESSAGE", payload: alertMessages
    }
}




