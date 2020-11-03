import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";

// REDUX STORE FOR DATAS 
import store from "./store/store";

// LANGUAGE CONTEXT
import languageContext from "./Context/context";

// LANGUAGES INTERFACE TRANSLATIONS
import en from "./assets/translations/en";
import fr from "./assets/translations/fr";


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