import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getFriends, getFriendsSuccess, openDialog } from '../actions/friends';
import { getMessages, getMessagesSuccess } from '../actions/messages';
import moment from 'moment';

class FriendsList extends React.Component {
    static contextTypes = {
        router: PropTypes.object
    };

    componentDidMount() {
        if(!this.props.friendsStore.loading) {
            this.props.getFriendsList();
        }
    }

    displayDate(d) {
        if(!d) return "";
        let date = new Date(d);
        if(new Date(date).setHours(0,0,0,0) == new Date().setHours(0,0,0,0)) {
            return moment(date).format('h:mm:ss A')
        } else {
            return moment(date).format('DD/MM/YY')
        }
    }

    openDialog(user) {
        this.props.openDialog(user);
        this.props.getMessages(user.id);
    }

    textLimit(text) {
        return text.length > 22 ? text.substring(0, 20) + '...' : text;
    }

    render() {
        let friends = this.props.friendsStore.friends;
        let messages = this.props.friendsStore.messages;

        let list = friends.map( friend => {
            let message = messages[friend.id] || {text: "", date: null};
            return (
                <li className={ this.props.friendsStore.openDialogWithUser.id == friend.id ? 'active' : ''}
                    key={friend.id}
                    onClick={this.openDialog.bind(this, friend)}>
                    <img src={friend.img}/>
                    <div className="friend-info">
                        <div className="message-info">
                            <h4>{friend.first_name}</h4>
                            <strong>{this.displayDate(message.date)}</strong>
                        </div>
                        <div className="message-clock">
                            <p>{message.user_to_id == friend.id ? "You:" : ""} {this.textLimit(message.text)}</p>
                        </div>
                    </div>
                </li>
            );
        });
        return (
            <ul>
                {list}
                <p className="count-info-box">Total {friends.length} contacts are displaying in the list</p>
            </ul>
        )
    }
}

export default connect(
  state => ({
    friendsStore: state.friends
  }),
  dispatch => ({
    getFriendsList: () => {
        dispatch(getFriends())
            .then((response) => {
                if(!response.error) {
                    dispatch(getFriendsSuccess(response.payload.data));
                } else {
                }
        });
    },
    openDialog: user => dispatch(openDialog(user)),
    getMessages: (user_id) => {
        dispatch(getMessages(user_id))
            .then((response) => {
                if(!response.error) {
                    dispatch(getMessagesSuccess(response.payload.data));
                } else {}
            });
    }
  })
)(FriendsList);
