import {ADD_FAV, REMOVE_FAV} from "../ActionTypes";


const init_fav_list = { ...localStorage}
const favReducer = (state=init_fav_list, action) => {
    switch (action.type) {
        case ADD_FAV:
            localStorage.setItem(action.payload.id, action.payload.data)
            state = { ...localStorage}
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
