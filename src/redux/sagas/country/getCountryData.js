import { call, put } from 'redux-saga/effects';
import moment from 'moment';
import uniqBy from 'lodash/uniqBy';
import * as a from '../../actions/country';

export function *getCountryDataSaga ({ slug }) {
    try {
        const today = new Date().toISOString();

        // Using ANOTHER API ROUTE
        // https://api.covid19api.com/country/south-africa/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z
        // doesn't include enough data
        const response = yield call(
            fetch,
            `https://api.covid19api.com/dayone/country/${slug}?from=2020-01-01T00:00:00Z&to=${today}`
        );

        const payload = yield response.json();

        const sorted = payload
            .sort((a,b) => new Date(b.Date) - new Date(a.Date))
            .map(item => ({
                ...item,
                Date: moment(item.Date).format('DD/MM/YYYY'),
            }));

        const unique = uniqBy(sorted,'Date');

        const temp = [];

        unique.forEach((item,index) => {
            const NewCases = index + 1 === unique.length ? 0 : item.Confirmed - sorted[index + 1].Confirmed;
            const NewDeaths = index + 1 === unique.length ? 0 : item.Deaths - sorted[index + 1].Deaths;
            temp.push({
                ...item,
                NewDeaths: NewDeaths > 0 ? NewDeaths : 0,
                NewCases: NewCases > 0 ? NewCases : 0
            });
        });
        yield put(a.getCountryDataSuccess(({ 
            payload: { [slug]: temp }
        })));

    }
    catch (error) {
        console.log('error',error);
        yield put(a.getCountryDataFailure());
    }
}
