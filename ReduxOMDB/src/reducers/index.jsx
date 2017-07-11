import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import movies from './movies.jsx';
import users from './usuarios.jsx'

const rootReducer = combineReducers({movies, users, routing:routerReducer});

export default rootReducer