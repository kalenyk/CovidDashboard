import { all, fork } from 'redux-saga/effects';
import country from './country';

export default function *rootSaga () {
    yield all([
        country
    ].map(fork));
}
