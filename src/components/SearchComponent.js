import React, {Component} from 'react';


import CITIES from "../shared/city.json";
import {Autocomplete, createFilterOptions} from "@material-ui/lab";

import TextField from "@material-ui/core/TextField";
import {useDispatch} from "react-redux";
import {addWeather, selectCity} from '../redux/actions';

const OPTIONS_LIMIT = 10;
const defaultFilterOptions = createFilterOptions();

const filterOptions = (options, state) => {
    return defaultFilterOptions(options, state).slice(0, OPTIONS_LIMIT);
};

const cities = []
const cities_dict = {}


CITIES.forEach((city) => {
    cities.push(city.name)
    cities_dict[city.name.toLowerCase()] = city

})

function SearchComponent() {
    const dispatch = useDispatch();

    function handleSelectCity(event)  {
        let city_name = event.target.value
        let city_name_lower = city_name.toLowerCase()
        if (city_name_lower in cities_dict) {
            let found_city = cities_dict[city_name_lower]
            let lat = found_city.coord.lat
            let lon = found_city.coord.lon
            let id = found_city.id
            dispatch(selectCity({name: city_name, lat: lat, lon: lon, id: id}))
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                <p>Search city</p>
                <Autocomplete
                    style={{width: 500}}
                    filterOptions={filterOptions}
                    options={cities}
                    renderInput={(params) => (
                        <TextField {...params}
                                   variant="outlined"
                                   label="Type your city"
                                   onSelect={(e) => handleSelectCity(e)}

                        />
                    )}
                />
            </div>
        </div>

    )
}

export default SearchComponent