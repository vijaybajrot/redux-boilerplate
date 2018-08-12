import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';


import reducers from '../reducers';

const store = createStore(reducers, applyMiddleware(promiseMiddleware(), thunk));

export default store;