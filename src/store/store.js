import reducer from "../reducer/reducer";

const { createStore } = require("redux");

const store = createStore(reducer)

export default store;