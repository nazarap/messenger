import React from 'react';
import { browserHistory } from 'react-router';

export default class SignUp extends React.Component {

    vkLoginSuccess(response) {
        if (response.status == "connected") {
            browserHistory.push('/create');
        }
    };

    vkLogin() {
        VK.Auth.login(this.vkLoginSuccess);
        return false;
    }

    render() {
        return (
            <div className="login-block reg-block">
                <h4>Sign up</h4>
                <p>You can register using your VK account. This will help you immediately find their friends.</p>
                <button onClick={this.vkLogin.bind(this)}><i className="fa fa-vk" aria-hidden="true"></i></button>
            </div>
        )
    }
}
