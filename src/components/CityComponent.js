import React, { Component } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addWeather, updateCityName} from "../redux/actions";


function picsDict(pic) {
    return `https://openweathermap.org/img/wn/${pic}@2x.png`
}

function CityComponent() {
    const city = useSelector(state => state.city);
    const dispatch = useDispatch()
    console.log(city)

    if (city.lat != null && city.lon != null)
        if (city.weather == null) {
            let url = `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=db603f7fcb51a2c7cee805e8e6c5488e`
            console.log(url)
            fetch(url)
                .then(response => response.json())
                .then(result => {
                    console.log(result)
                    if (city.name == null)
                        dispatch(updateCityName(result.name))
                    dispatch(addWeather({temp: result.main.temp - 273, icon: result.weather[0].icon}))
                })
        }


    return (
        <div>
            <h2>Weather in {city.name}</h2>
            <p>{city.name != null ? city.name : '-'}</p>
            <p>{city.weather != null ? city.weather.temp : '-'} °C </p>
            {city.weather != null ? <img src={picsDict(city.weather.icon)}/> : '-'}
        </div>
    )

}

export default CityComponent