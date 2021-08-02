import React, {Component, useState} from 'react';
import './App.css';
// import {AppProvider} from "@shopify/polaris";
// import {BrowserRouter, Link} from 'react-router-dom';
import CityComponent from "./components/CityComponent";
import SearchComponent from "./components/SearchComponent";
import FavoritesComponent from "./components/FavoritesComponent";
import {useSelector, useDispatch} from 'react-redux';
import {selectCity} from "./redux/actions";

function App() {

    const dispatch = useDispatch()
    navigator.geolocation.getCurrentPosition(
            (position) => {
                dispatch(selectCity(
                    {
                        lat: position.coords.latitude,
                        lon: position.coords.longitude
                    }))
    })


    return (
                <React.Fragment>
                    <div className='container'>
                        <div className='row'>

                            <SearchComponent/>
                            <CityComponent/>
                            <FavoritesComponent/>
                        </div>



                    </div>


                </React.Fragment>


        );


}


export default App;
