import {ADD_WEATHER, SELECT_CITY, UPDATE_CITY_NAME} from "../ActionTypes";
import { createReducer } from '@reduxjs/toolkit'

const initialState = { name:'Moscow', lat: 46.732,lon: -117.000168}

const cityReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(SELECT_CITY, (state, action) => {
            // This push() operation gets translated into the same
            // extended-array creation as in the previous example.
            return action.payload
        })
        .addCase(ADD_WEATHER, (state, action) => {
            // The "mutating" version of this case reducer is much
            //  more direct than the explicitly pure one.
            state.weather = action.payload
            return state
        })
        .addCase(UPDATE_CITY_NAME, (state, action) => {
            // The "mutating" version of this case reducer is much
            //  more direct than the explicitly pure one.
            state.id = action.payload.id
            state.name = action.payload.name
            return state
        })
})


export default cityReducer;