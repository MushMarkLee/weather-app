import React, { Component } from 'react';
import {addFavorite, selectCity, updateCityName} from "../redux/actions";
import {useDispatch, useSelector} from "react-redux";

import CITIES from "../shared/city.json";



const cities = []
const cities_dict = {}

CITIES.forEach((cit) => {
    cities.push(cit.name)
    cities_dict[cit.name.toLowerCase()] = cit
})

function FavoritesComponent() {

    const favorites = useSelector(state => state.favorites);
    const dispatch = useDispatch();
    console.log(favorites)



    function handleFavorite(city)  {

        let city_name = city.toLowerCase()
        if (city_name in cities_dict) {
            let found_city = cities_dict[city_name]
            let lat = found_city.coord.lat
            let lon = found_city.coord.lon
            dispatch(selectCity({name: city, lat: lat, lon: lon}))
        }
    }


    let fav_list = Object.keys(favorites).map((key) => <ul><button onClick={()=>handleFavorite(favorites[key])}>{favorites[key]}</button></ul>)

    return(
            <div className='col-md-1 mx-auto' id='lists'>
                <li>
                    {fav_list}
                </li>
            </div>


    )

}
export default FavoritesComponent