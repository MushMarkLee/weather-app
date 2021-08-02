import React, { Component } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addFavorite, addWeather, updateCityName} from "../redux/actions";
import findCityById from "../shared/city";


function picsDict(pic) {
    return `https://openweathermap.org/img/wn/${pic}@2x.png`
}


function CityComponent() {
    const city = useSelector(state => state.city);
    const dispatch = useDispatch()

    if (city.lat != null && city.lon != null)
        if (city.weather == null) {
            let url = `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=db603f7fcb51a2c7cee805e8e6c5488e`
            fetch(url)
                .then(response => response.json())
                .then(result => {
                    let found_city = findCityById(result.id)
                    if (city != null && city.name == null)
                        dispatch(updateCityName({name: found_city.name, id: found_city.id}))
                    dispatch(addWeather({temp: result.main.temp - 273, icon: result.weather[0].icon}))
                })
        }

    const click = (id, data) =>{
        dispatch(addFavorite({id: id, data: data}))
    }


    return (
        <div className='col-md-4' id='city'>
            <h2 id='title'>Weather in {city.name}</h2>


            <div className='weather'>

                {city.weather != null ? <img src={picsDict(city.weather.icon)}/> : '-'}
                <div className='temp'>
                    {city.weather != null ? city.weather.temp.toFixed(1) : '-'} °C
                </div>
                <div >
                    <button className='simple' onClick={()=>click(city.id,city.name)}>Add city to favorite</button>
                </div>

            </div>


        </div>

    )

}

export default CityComponent