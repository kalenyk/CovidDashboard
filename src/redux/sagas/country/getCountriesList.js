import { call, put } from 'redux-saga/effects';

import * as a from '../../actions/country';

export function *getCountriesListSaga () {
    try {
        const response = yield call(
            fetch,
            'https://api.covid19api.com/countries'
        );

        const payload = yield response.json();
        yield put(a.getCountriesListSuccess(({ 
            payload
        })));

    }
    catch (error) {
        console.log('error',error);
        yield put(a.getCountriesListFailure());
    }
}
