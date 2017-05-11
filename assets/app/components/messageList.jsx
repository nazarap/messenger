import React from 'react';
import { connect } from 'react-redux';
import { getMessages, getMessagesSuccess } from '../actions/messages';
import moment from 'moment';

class MessageList extends React.Component {

    componentDidMount() {
        this.props.getMessages(this.props.friendsStore.openDialogWithUser.id);
    }

    displayDate(d) {
        let date = new Date(d);
        if(new Date(date).setHours(0,0,0,0) == new Date().setHours(0,0,0,0)) {
            return moment(date).format('h:mm:ss A')
        } else {
            return moment(date).format('DD/MM/YY')
        }
    }

    render() {
        let messages = this.props.messagesStore.messages;
        let user = this.props.friendsStore.openDialogWithUser;
        let activeUser = this.props.userStore.user;

        let list = messages.map( message => {
            return (
                <div className="message-item" key={message.id}>
                    <img src={activeUser.id == message.user_from_id ? activeUser.img : user.img}/>
                    <div className="message-info">
                        <h4>{activeUser.id == message.user_from_id ?
                            activeUser.first_name + " " + activeUser.last_name : user.first_name + " " + user.last_name}</h4>
                        <p>{message.text}</p>
                    </div>
                    <div className="message-clock">
                        <strong>{this.displayDate(message.date)}</strong>
                    </div>
                </div>
            );
        });

        return (<div className="message-list">

            <div className="message-list-top"></div>

            {list}

            <div className="message-list-top"></div>

        </div>
    )
    }
}

export default connect(
    state => ({
        messagesStore: state.messages,
        userStore: state.user,
        friendsStore: state.friends
    }),
    dispatch => ({
        getMessages: (user_id) => {
            dispatch(getMessages(user_id))
                .then((response) => {
                    if(!response.error) {
                        dispatch(getMessagesSuccess(response.payload.data));
                    } else {}
                });
    }
})
)(MessageList);
