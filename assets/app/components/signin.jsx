import React from 'react';
import { Link } from 'react-router'

export default class SignIn extends React.Component {
    render() {
        return (
            <div className="login-block">
                <h4>Sign in</h4>
                <p>Please enter your login (vk login) and your password.</p>
                <input placeholder="Login"/>
                <input placeholder="Password" type="password"/>
                <Link to={`/messaging`}>
                    <button className="next-btn">Next <i className="fa fa-angle-right" aria-hidden="true"></i></button>
                </Link>
            </div>
        )
    }
}
