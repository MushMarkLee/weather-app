import React, { Component } from 'react';
import {addFavorite, updateCityName} from "../redux/actions";
import {useDispatch, useSelector} from "react-redux";

function FavoritesComponent() {

    const favorites = useSelector(state => state.favorites);
    const dispatch = useDispatch();
    console.log(favorites)


    const updatecity= (city) =>{
        dispatch(updateCityName(city))
    }


    let fav_list = Object.keys(favorites).map((key) => <button onClick={()=>updatecity(favorites[key])}>{favorites[key]}</button>)

    return(
        <div className='fav_list'>
            {fav_list}
        </div>

    )

}
export default FavoritesComponent