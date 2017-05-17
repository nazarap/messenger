import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import { createUser, createUserSuccess } from '../actions/users';

class CreateAccount extends React.Component {

    constructor(props) {
        super(props);

        this.newUser = {};

        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        VK.api("users.get", {fields:"photo_200"}, (data) => {
            this.newUser.img = data.response[0].photo_200;
            this.newUser.vk_token = VK._session.sid;
            this.newUser.vk_id = data.response[0].uid;
            this.setState({user: data.response[0]});
        });
        if(localStorage.getItem('authToken')) {
            browserHistory.push('/messaging');
        }
    }

    createUser() {
        if(this.newUser.password.value && this.newUser.login.value &&
            this.newUser.first_name.value && this.newUser.last_name.value &&
            this.newUser.password.value == this.newUser.rePassword.value) {

            this.props.createUser(this.newUser);
        }
    }

    firstNameListener(event) {
        this.newUser.first_name = event.target;
        this.setState({ user: {...this.state.user, first_name: event.target.value} });
    }

    lastNameListener(event) {
        this.newUser.last_name = event.target;
        this.setState({ user: {...this.state.user, last_name: event.target.value} });
    }

    render() {
        return (
            <div>
                <header className="login-header">
                    <Link to={`/login`}>
                        <button className="cancel-left-btn"><i className="fa fa-angle-left" aria-hidden="true"></i> Cancel</button>
                    </Link>
                </header>

                <div className="login-block account-create-block">
                    <div className="image">
                        <img src={this.state.user.photo_200}/>
                        <i className="fa fa-camera-retro" aria-hidden="true"></i>
                    </div>
                    <input placeholder="First name" value={this.state.user.first_name} onChange={this.firstNameListener.bind(this)}/>
                    <input placeholder="Last name" value={this.state.user.last_name} onChange={this.lastNameListener.bind(this)}/>
                    <input placeholder="Login" ref={(login) => { this.newUser.login = login }}/>
                    <input placeholder="Password" type="password"
                            ref={(password) => { this.newUser.password = password }}/>
                    <input placeholder="Repeat password" type="password"
                            ref={(rePassword) => { this.newUser.rePassword = rePassword }}/>
                    <button className="next-btn"
                            onClick={this.createUser.bind(this)}>
                            Create <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        )
    }
}

export default connect(
  state => ({}),
  dispatch => ({
    createUser: user => {
        dispatch(createUser(user))
            .then((response) => {
                if(!response.error) {
                    dispatch(createUserSuccess(response.payload.data));
                    browserHistory.push('/messaging');
                } else {}
            });
    }
  })
)(CreateAccount);
