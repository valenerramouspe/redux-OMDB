import thunkMiddleware from 'redux-thunk'
import {createStore, applyMiddleware, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {hashHistory} from 'react-router';
import {createLogger} from 'redux-logger';

//import root reducer

import rootReducer from './reducers/index.jsx';

import movies from './reducers/movies.jsx';



//create object for default data

const defaultState = {
	movies: {
		movies: [],
		isFetching: false,
	},
	users:{
		user:{
			username:null,
			favorites: []
		},
		isFetching:false,
		isDenied: false,
		isDeniedMessage: null,
	}
};

const loggerMiddleware = createLogger();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, defaultState, composeEnhancers(
    applyMiddleware(thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware,
    )));

export const history = syncHistoryWithStore(hashHistory, store);

if(module.hot){
	module.hot.accept('./reducers/',() => {
		const nextRootReducer = require('./reducers/index').default;
		store.replaceReducer(nextRootReducer)
	})
}

export default store;