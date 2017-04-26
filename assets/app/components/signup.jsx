import React from 'react';
import { Link } from 'react-router'

export default class SignUp extends React.Component {
    render() {
        return (
            <div className="login-block reg-block">
                <h4>Sign up</h4>
                <p>You can register using your VK account. This will help you immediately find their friends.</p>
                <Link to={`/create`}>
                    <button><i className="fa fa-vk" aria-hidden="true"></i></button>
                </Link>
            </div>
        )
    }
}