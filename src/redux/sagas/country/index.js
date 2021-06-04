import { takeLatest } from 'redux-saga/effects';

import * as c from '../../constants/country';

import { getCountriesListSaga } from './getCountriesList';
import { getCountryDataSaga } from './getCountryData';

export default function *() {
    yield takeLatest(c.GET_COUNTRIES_LIST, getCountriesListSaga);
    yield takeLatest(c.GET_COUNTRY_DATA, getCountryDataSaga);
}
