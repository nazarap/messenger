import React from 'react';
import MessageList from './messageList.jsx';
import { connect } from 'react-redux';
import { getUser, getUserSuccess } from '../actions/users';

class MessageContent extends React.Component {

    componentDidMount() {}

    render() {
        let user = this.props.friendsStore.openDialogWithUser;

        return (
            user.id ?
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
            :
                <div className="message-block">
                    <h1>Please select dialog for display in this window</h1>
                </div>
        )
    }
}

export default connect(
    state => ({
        userStore: state.user,
        friendsStore: state.friends
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
