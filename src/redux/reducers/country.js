import { handleActions } from 'redux-actions';

import * as c from '../constants/country';

const initialState = {
    countriesList: [],
    countriesData: {}
};

const countryData = handleActions(
    new Map([
        [
            c.GET_COUNTRIES_LIST_SUCCESS,
            (state, { payload }) => ({
                ...state,
                countriesList: payload
            })  
        ],
        [
            c.GET_COUNTRY_DATA_SUCCESS,
            (state, { payload }) => ({
                ...state,
                countriesData: {
                    ...state.countriesData,
                    ...payload
                }
            })
        ]
    ]),
    initialState
);

export default countryData;
