require('expose?$!expose?jQuery!jquery');
require("bootstrap-webpack");
require('./static/styles/main.less');

import React from 'react';
import {render} from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { Provider, connect } from 'react-redux';

// import reducer from './reducers/index'
// import App from './components/App'
// import { moviesActions } from './actions/movies'

// const loggerMiddleware = createLogger();
// const store = createStore(
//     reducer,
//     applyMiddleware(
//         thunkMiddleware, // lets us dispatch() functions
//         loggerMiddleware // neat middleware that logs actions
//     )
// );
// // store.dispatch(moviesActions.loadMovies());

// render(
// <Provider store={store}>
//     <App />
//     </Provider>,
//     document.getElementById('main')
// );