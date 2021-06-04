import * as c from '../constants/country';

export const getCountriesList = () => ({
    type: c.GET_COUNTRIES_LIST
});
export const getCountriesListSuccess = ({ payload }) => ({
    type: c.GET_COUNTRIES_LIST_SUCCESS,
    payload,
});
export const getCountriesListFailure = () => ({
    type: c.GET_COUNTRIES_LIST_FAILURE,
});


export const getCountryData = ({ slug }) => ({
    type: c.GET_COUNTRY_DATA,
    slug,
});
export const getCountryDataSuccess = ({ payload }) => ({
    type: c.GET_COUNTRY_DATA_SUCCESS,
    payload,
});
export const getCountryDataFailure = () => ({
    type: c.GET_COUNTRY_DATA_FAILURE,
});