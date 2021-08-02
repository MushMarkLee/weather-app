import {ADD_WEATHER, SELECT_CITY, UPDATE_CITY_NAME} from "../ActionTypes";
import { createReducer } from '@reduxjs/toolkit'

// const cityReducer = (state, action) => {
//     switch (action.type) {
//         case SELECT_CITY:
//             return action.payload;
//         default:
//             return state;
//
//     }
// };
//

const initialState = { name:'Moscow',lat: 46.732,lon: -117.000168}


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
            state.name = action.payload
            return state
        })
})


export default cityReducer;