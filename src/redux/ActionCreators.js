import * as ActionTypes from './ActionTypes';
import cities from "../shared/city.json";


export const fetchCities = () => (dispatch) => {

    dispatch(citiesLoading(true));
    const Cities = []
    const cities_dict = {}

    cities.map((cit) => {
        Cities.push(cit.name)
        cities_dict[cit.name.toLowerCase()] = cit
    })

    setTimeout(() => {
        dispatch(addCities(Cities, cities_dict));
    }, 2000);
}


export const citiesLoading = () => ({
    type: ActionTypes.CITIES_LOADING
});

export const citiesFailed = (errmess) => ({
    type: ActionTypes.CITIES_FAILED,
    payload: errmess
});

export const addCities = (cities, citiesobj) => ({
    type: ActionTypes.ADD_CITIES,
    payload: Promise.all([cities, citiesobj])
});


