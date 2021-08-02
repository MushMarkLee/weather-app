import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { Cities } from './cities'



export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            cities: Cities,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

        applyMiddleware(thunk, logger)

    );
    return store;
}