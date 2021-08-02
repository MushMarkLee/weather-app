import * as ActionTypes from './ActionTypes';
import CITIES from "../shared/city";

export const Cities = (state=CITIES, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CITIES:
            return {...state, isLoading: false, errMess: null, cities: action.payload};


        case ActionTypes.CITIES_LOADING:
            return {...state, isLoading: true, errMess: null, cities: []}

        case ActionTypes.CITIES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};