import ApiEngine from "../service/ApiEngine";

const setCurrentUser = (userDatas) => {
    return { type: "SET_CURRENT_USER", payload: userDatas }
}


const API_ENGINE = new ApiEngine();

export const asncSetCurrentUser = (userDatas) => {

    return async (dispatch) => {

            let response = await API_ENGINE.signIn(userDatas);

            console.log(response)

            // dispatch(
            //     setCurrentUser(
            //        userDatas
            //     )
            // )
    
    }
}


