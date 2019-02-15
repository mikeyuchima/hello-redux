import {
    createStore
} from "redux"; //an import from the redux library
import reducer from "../reducers";

const initialState = {
    tech: "REACT "
};
const store = createStore(reducer, initialState);


export default store;