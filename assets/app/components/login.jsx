import React from 'react';
import SignIn from './signin.jsx';
import SignUp from './signup.jsx';
import { browserHistory } from 'react-router';

export default class Login extends React.Component {

    componentDidMount() {
        if(sessionStorage.getItem('authToken')) {
            browserHistory.push('/messaging');
        }
    }

    render() {
        return (
            <div>
                <header className="login-header"></header>
                <SignIn/>
                <SignUp/>
            </div>
        )
    }
}
