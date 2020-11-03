import Cookies from 'js-cookie'

class User {

    // userdatas as object {username, email, password}

    static async signUp(ApiEngine, datas, endpoint = "/auth/local/register") {

        let response = await ApiEngine.create(datas, endpoint);

        return response

    }

    // userdatas as object {identifier:email or login, password}
    static async signIn(ApiEngine, datas, endpoint = "/auth/local") {

        let response = await ApiEngine.create(datas, endpoint);

        if (response.hasOwnProperty("jwt")) { Cookies.set("current_user_jwt", response.jwt) }

        return response

    }


    static isUserLoggedIn()
    {
        return Cookies.get('current_user_jwt') ? true : false;
    }
}


export default User;