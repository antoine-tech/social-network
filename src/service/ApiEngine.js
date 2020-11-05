import API_BASE_URL from "../config/API/ApiBaseUrl";

import Cookies from 'js-cookie'

class ApiEngine {

    constructor(base_url = API_BASE_URL, endpoint) {
        this.base_url = base_url;
        this.endpoint = endpoint;
    }
    // request method for all requests
    async request(method, body = null, authenticated = false, jwt_token = null, headers = { "Content-Type": "application/json" }, authHeaders = { 'Authorization': `Bearer ${jwt_token}` }) {

        // adding headers to fetch
        headers = authenticated && jwt_token ? { ...headers, ...authHeaders } : headers;


        // constructing array of options to pass it to fetch
        let options = {
            method: method,
            headers: headers
        }


        console.log(options);

        // dealing with options body if needed (POST, PUT)

        options = body ? { ...options, ...{ body: JSON.stringify(body) } } : options;



        // executing call to api
        let api_response = await fetch(this.endpoint, options)
        .then((response) => response.json())
        .then((error) => error);

        // return api response
        return api_response;

    }

    // WRAPPER POST CREATE METHOD
    async create(datas, endpoint, authenticated = false, jwt_token = null) {
        this.endpoint = this.base_url + endpoint;
        let response = await this.request("POST", datas, authenticated, jwt_token)
        return response;
    }
    // WRAPPER PUT UPDATE METHOD
    async update(datas, endpoint, authenticated = true, jwt_token = null) {
        this.endpoint = this.base_url + endpoint;
        let response = await this.request("PUT", datas, authenticated, jwt_token)
        return response;
    }
    // WRAPPER DELETE CREATE METHOD
    async delete(endpoint, authenticated = true, jwt_token = null) {
        this.endpoint = this.base_url + endpoint;
        let response = await this.request("DELETE", null, authenticated, jwt_token)
        return response;
    }
    // WRAPPER FIND METHOD
    async find(endpoint, authenticated = true, jwt_token = null) {
        this.endpoint = this.base_url + endpoint;
        let response = await this.request("GET", null, authenticated, jwt_token)
        return response;
    }


    // userdatas as object {username, email, password}

    async signUp(datas, endpoint = "/auth/local/register") {

        let response = await this.create(datas, endpoint);

        return response

    }

    // userdatas as object {identifier:email or login, password}
    async signIn(datas, endpoint = "/auth/local") {

        let response = await this.create(datas, endpoint);

        if (response.hasOwnProperty("jwt")) { Cookies.set("current_user_jwt", response.jwt) }

        return response

    }


}


export default ApiEngine;