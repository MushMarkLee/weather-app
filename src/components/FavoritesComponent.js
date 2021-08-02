import React, { Component } from 'react';
import {addFavorite} from "../redux/actions";
import {useDispatch, useSelector} from "react-redux";

function FavoritesComponent() {

    const favorites = useSelector(state => state.favorites);
    const dispatch = useDispatch();
    console.log(favorites)

    let fav_list = Object.keys(favorites).map((key) => <p>{favorites[key]}</p>)

    return(
        <div className='fav_list'>
            {fav_list}
        </div>

    )

}
export default FavoritesComponent