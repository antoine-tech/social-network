import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";

// REDUX STORE FOR DATAS 
import store from "./store/store";

// LANGUAGE CONTEXT
import languageContext from "./Context/context";

// LANGUAGES INTERFACE TRANSLATIONS
import en from "./assets/translations/en";
import fr from "./assets/translations/fr";

// STYLES
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css';
import "mdbootstrap/css/bootstrap.min.css";
import "materialize-css/sass/materialize.scss";
import "./assets/styles/main.scss";


const translations = {
    fr: fr,
    en: en
}



ReactDOM.render(


    <languageContext.Provider value={translations}>

        <Provider store={store}>

            <App />

        </Provider>

    </languageContext.Provider>, document.querySelector("#root")
)