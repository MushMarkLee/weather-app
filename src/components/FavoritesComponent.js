import React, { Component } from 'react';
import {addFavorite, selectCity, updateCityName} from "../redux/actions";
import {useDispatch, useSelector} from "react-redux";

import CITIES from "../shared/city.json";
import findCityById from "../shared/city";



const cities = []
const cities_dict = {}

CITIES.forEach((cit) => {
    cities.push(cit.name)
    cities_dict[cit.name.toLowerCase()] = cit
})

function FavoritesComponent() {

    const favorites = useSelector(state => state.favorites);
    const dispatch = useDispatch();

    function handleFavorite(id)  {
        let city = findCityById(id)
        dispatch(selectCity({name: city.name, lat: city.coord.lat, lon: city.coord.lon}))
    }


    let fav_list = Object.keys(favorites).map((key) => {
        return (
            <ul>
                <button onClick={()=>handleFavorite(key)}>{favorites[key]}</button>
            </ul>
        )
    })

    return(
            <div className='col-md-1 mx-auto' id='lists'>
                <li>
                    {fav_list}
                </li>
            </div>


    )

}
export default FavoritesComponent