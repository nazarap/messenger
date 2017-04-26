import React from 'react';
import MessageList from './messageList.jsx';
import { connect } from 'react-redux';
import { getUser, getUserSuccess } from '../actions/users';

class MessageContent extends React.Component {

    componentDidMount() {}

    render() {
        let user = this.props.userStore.user;
        return (
            <div className="message-block">
                <div className="header">
                    <img src={user.img}/>
                    <h4>{user.first_name} {user.last_name}</h4>
                    <i className="fa fa-cog" aria-hidden="true"></i>
                </div>
                <MessageList/>
                <div className="message-send">
                    <input/>
                    <button>
                        <i className="fa fa-paper-plane" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        userStore: state.user
    }),
    dispatch => ({
        getUser: () => {
            dispatch(getUser())
                .then((response) => {
                    if(!response.error) {
                        dispatch(getUserSuccess(response.payload.data));
                    } else {
                    }
                });
    }
})
)(MessageContent);
