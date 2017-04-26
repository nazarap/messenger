import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { login, loginSuccess } from '../actions/users';
import { browserHistory } from 'react-router';

class SignIn extends React.Component {
    static contextTypes = {
        router: PropTypes.object
    };

    signup() {
        let res = this.props.login({login: this.login.value, password: this.password.value})
    }

    render() {
        return (
            <div className="login-block">
                <h4>Sign in</h4>
                <p>Please enter your login (vk login) and your password.</p>
                <input placeholder="Login" ref={(login) => { this.login = login }}/>
                <input placeholder="Password" ref={(password) => { this.password = password }} type="password"/>
                <button className="next-btn" onClick={this.signup.bind(this)}>Next <i className="fa fa-angle-right" aria-hidden="true"></i></button>
            </div>
        )
    }
}

export default connect(
  state => ({
    userStore: state.user
  }),
  dispatch => ({
    login: auth => {
        dispatch(login(auth))
            .then((response) => {
                if(!response.error) {
                    browserHistory.push('/messaging');
                    dispatch(loginSuccess(response.payload.data));
                } else {
                }
            });
    }
  })
)(SignIn);
