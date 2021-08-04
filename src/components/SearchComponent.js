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


function SearchComponent() {
    const dispatch = useDispatch();

    function handleSelectCity(city)  {
        if (city != null && city.name != null) {
            dispatch(selectCity({name: city.name, lat: city.coord.lat, lon: city.coord.lon, id: city.id}))
        }
    }

    return (
        <div className='col-md-4 mx-auto' id='search'>
                <p>Search city</p>

                <Autocomplete

                    filterOptions={filterOptions}
                    options={CITIES}

                    getOptionLabel={(option) => option.name + ' (' + option.country + ')'}
                    getOptionSelected={(option, value) => {
                        return option.name === value.name;
                    }}
                    onChange={(event, newValue) => handleSelectCity(newValue)}
                    renderInput={(params) => (
                        <TextField {...params}
                                   variant="outlined"
                                   label="Type your city"
                        />
                    )}
                />
        </div>

    )
}

export default SearchComponent

