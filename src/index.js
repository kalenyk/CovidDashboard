import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Router } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';

import history from './utils/history';

import rootSaga from './redux/sagas/rootSaga';
import rootReducer from './redux/reducers/rootReducer';



import Header from './containers/Header';
import Sidebar from './containers/Sidebar';
import App from './containers/App';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)
);

sagaMiddleware.run(rootSaga);


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>

            <Router history={history}>
                <Route path="*" component={Header} />
                <Route path="*" component={Sidebar} />
                <Switch>
                    <Route path="/country/:slug" component={App} />
                </Switch>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);