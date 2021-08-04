import React, { Component } from 'react';
import {addFavorite, selectCity, updateCityName} from "../redux/actions";
import {useDispatch, useSelector} from "react-redux";

import CITIES from "../shared/city.json";
import findCityById from "../shared/city";

function openNav() {
    document.getElementById("mySidenav").style.width='250px'

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

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
            <li onClick={closeNav}>
                <button className='bn49' onClick={()=>handleFavorite(key)}>{favorites[key]}</button>
            </li>
        )
    })

    return(
        <aside className="clearfix visible-xs">
            <div id="burger">
                <div id="burger">
                    <div id="mySidenav" className="sidenav_mobile">
                        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                        <ul><li><h5 id='fav_name'>Your favorite cities </h5></li></ul>
                        <ul>
                                {fav_list}
                        </ul>
                    </div>
                    <span
                        style={{fontSize:'45px',cursor:'pointer',backgroundShape:'circle'}}
                        onClick={openNav}>&#128153; </span>
                </div>
            </div>
            <div className="menu_container">
                <nav>
                    <div className="sidenav">

                        <ul>
                            <h2 id='fav_name'>Your favorite cities</h2>
                            {fav_list}
                        </ul>

                    </div>
                </nav>
            </div>
        </aside>
    )
}


export default FavoritesComponent