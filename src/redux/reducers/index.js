import favReducer from "./favReducer";
import cityReducer from "./cityReducer";
import {combineReducers} from "redux";

const all_reducers = combineReducers({
    favorites: favReducer,
    city: cityReducer,
})

export default all_reducers;