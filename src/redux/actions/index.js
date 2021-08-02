import {ADD_FAV, ADD_WEATHER, REMOVE_FAV, SELECT_CITY, UPDATE_CITY_NAME} from "../ActionTypes";


export const addFavorite = () => {
    return {
        type: ADD_FAV
    };
};

export const removeFavorite = () => {
    return {
        type: REMOVE_FAV
    };
};


export const selectCity = (city) => {
    return {
        type: SELECT_CITY,
        payload: city
    };
};

export const updateCityName = (city) => {
    return {
        type: UPDATE_CITY_NAME,
        payload: city
    };
};

export const addWeather = (weather) => {
    return {
        type: ADD_WEATHER,
        payload: weather
    };
};