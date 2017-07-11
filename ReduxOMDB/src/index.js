var React = require('react')
import { render } from 'react-dom';
import store, {history} from './store';

import Main from './components/main.jsx';
import Home from './components/home.jsx';
import Favoritos from './components/favoritos.jsx';
import CrearUsuario from './components/crearusuario.jsx';
import LogIn from './components/login.jsx';
import Profile from './components/profile.jsx';
import Single from './components/single.jsx';
import App from './components/App.jsx';
import Unauthorized from'./components/unauthorized.jsx';
import MovieGrid from './components/moviegrid.jsx';
import { Provider } from 'react-redux';

import {Route, Router, IndexRoute, hashHistory} from 'react-router';


const router = (
    <Provider store={store}>
        <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="favoritos" component={Favoritos}/>
            <Route path="signup" component={CrearUsuario}/>
            <Route path="login" component={LogIn}/>
            <Route path="profile" component={Profile}/>
            <Route path="single/:imdbID" component={Single}/>
            <Route path="moviegrid" component={MovieGrid}/>
            <Route path="unauthorized" component={Unauthorized}/>
        </Route>
        </Router>
    </Provider>
    )
render (router, document.getElementById('app'))