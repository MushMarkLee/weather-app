import {ADD_FAV, REMOVE_FAV} from "../ActionTypes";

const favReducer = (state=['Moscow'], action) => {
    switch (action.type) {
        case ADD_FAV:
            state.push(action.payload);
            return state;
        case REMOVE_FAV:
            let city_name= action.payload
            var index = state.indexOf(city_name);
            if (index !== -1) {
                state.splice(index, 1);
            }
            return state;
        default:
            return state;
    }
};


export default favReducer;
