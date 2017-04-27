import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getFriends, getFriendsSuccess, openDialog } from '../actions/friends';

class FriendsList extends React.Component {
    static contextTypes = {
        router: PropTypes.object
    };

    componentDidMount() {
        this.props.getFriendsList();
    }

    openDialog(user) {
        this.props.openDialog(user);
    }

    render() {
        let friends = this.props.friendsStore.friends;

        let list = friends.map( friend => {
            return (
                <li className={ this.props.friendsStore.openDialogWithUser.id == friend.id ? 'active' : ''}
                    key={friend.id}
                    onClick={this.openDialog.bind(this, friend)}>
                    <img src={friend.img}/>
                    <div className="message-info">
                        <h4>{friend.first_name}</h4>
                        <p>Some message text ...</p>
                    </div>
                    <div className="message-clock">
                        <strong>1/11/17</strong>
                        <div>4</div>
                    </div>
                </li>
            );
        });
        return (
            <ul>
                {list}
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
    openDialog: user => dispatch(openDialog(user))
  })
)(FriendsList);
