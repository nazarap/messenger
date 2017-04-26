/**
 * Created by norysc on 21.03.17.
 */
import React from 'react';

import { render } from 'react-dom'
import Messaging from './components/messaging.jsx';
import User from './domain/User';
import ActionBar from './components/actionBar.jsx';
import Login from './components/login.jsx';
import CreateAccount from './components/createAccount.jsx';

import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router'

let user = new User(1, "Nazar", "Oryschuk", "https://pp.userapi.com/c631520/v631520122/404a7/19cw3JvnFq8.jpg");

render(
    <Router history={browserHistory}>
        <Route user={user} component = {ActionBar}>
            <Route path='/messaging' user={user} component={Messaging} />
        </Route>
        <Route path='/login' component={Login} />
        <Route path='/create' component={CreateAccount} />
        <Redirect from="/" to="login" />
    </Router>,
    document.getElementById('app')
);
