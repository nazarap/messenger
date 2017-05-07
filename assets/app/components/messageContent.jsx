import React from 'react';
import MessageList from './messageList.jsx';
import { connect } from 'react-redux';
import { getUser, getUserSuccess } from '../actions/users';
import { sendMessage, getMessagesSuccess } from '../actions/messages';

class MessageContent extends React.Component {

    componentDidMount() {}

    send(e) {
        if (e === 'SendButton' || (e.key === 'Enter' && e.ctrlKey)) {
            if (!this.messageText.value || this.messageText.value == "") return;
            this.props.sendMessage(this.props.friendsStore.openDialogWithUser.id, this.messageText.value);
            this.messageText.value = "";
        }
    }

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
                        <textarea rows="4" cols="50" onKeyPress={this.send.bind(this)}
                                  placeholder="Write a message here..." ref={(messageText) => { this.messageText = messageText }} ></textarea>
                        <button onClick={this.send.bind(this, "SendButton")}>
                            <i className="fa fa-paper-plane" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            :
                <div className="message-block">
                    <i className="fa fa-envelope-open-o" aria-hidden="true"></i>
                    <h1>Please select dialog for display in this window</h1>
                </div>
        )
    }
}

export default connect(
    state => ({
        userStore: state.user,
        friendsStore: state.friends,
        messagesStore: state.messages
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
        },
        sendMessage: (user_id, text) => {
            dispatch(sendMessage(user_id, text))
                .then((response) => {
                    if(!response.error) {
                        dispatch(getMessagesSuccess(response.payload.data));
                    } else {}
                });
        },
    }
)
)(MessageContent);
