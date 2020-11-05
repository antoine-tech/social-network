import Cookies from "js-cookie";
// METHOD TO HELP CHECKING IF USER IS LOGGED OR NOT BY CHECKING IF KEY current_user of REDUX STORE IS NOT AN EMPTY OBJECT
export const isUserLoggedIn = (current_user) => {
    //return Object.keys(current_user).length > 0;

    return Cookies.get("current_user") !== undefined
}