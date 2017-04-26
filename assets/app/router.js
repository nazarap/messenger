import React from 'react';

import { render } from 'react-dom'
import Messaging from './components/messaging.jsx';
import ActionBar from './components/actionBar.jsx';
import Login from './components/login.jsx';
import CreateAccount from './components/createAccount.jsx';

import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router'

export default (
    <Router history={browserHistory}>
        <Route component={ActionBar}>
            <Route path='/messaging' component={Messaging} />
        </Route>
        <Route path='/login' component={Login} />
        <Route path='/create' component={CreateAccount} />
        <Redirect from="/" to="login" />
    </Router>
);
