import React from 'react';
import ContactsList from './contactsList.jsx';
import FriendsList from './friendsList.jsx';
import { searchFriends, searchFriendsSuccess, getFriends, getFriendsSuccess } from '../actions/friends';
import { connect } from 'react-redux';

class LeftBar extends React.Component {

    constructor(props) {
        super(props);

        this.types = {
            'active': 1,
            'vk': 2,
            'search': 3
        };

        this.state = {
            listType: this.types['active']
        }
    }

    changeListType(type) {
        if(this.state.listType == this.types['search'] && type == this.types['active']) {
            this.props.getFriendsList();
        }
        this.setState({listType: type});
    }

    findUser(e) {
        if (e.key === 'Enter') {
            if(!this.search.value || this.search.value == "") {
                this.changeListType(this.types['active']);
            } else {
                this.changeListType(this.types['search']);
                this.props.searchFriends(this.search.value);
            }
        }
    }

    render() {
        return (<div className="left-bar">
            <div className="search-block">
                <i className="fa fa-search" aria-hidden="true"></i>
                <input placeholder="Search ... " ref={(search) => { this.search = search }}
                       onKeyPress={this.findUser.bind(this)}/>
                <i className="fa fa-circle-o-notch" aria-hidden="true">
                    <div className='top-dropdown-menu'>
                        <label className="radio"><input id="radio1" type="radio" name="radios"/><span className="outer"><span className="inner"></span></span>Friends</label>
                        <label className="radio"><input id="radio2" type="radio" name="radios"/><span className="outer"><span className="inner"></span></span>VK Friends</label>
                        <label className="radio"><input id="radio3" type="radio" name="radios"/><span className="outer"><span className="inner"></span></span>Other users</label>
                    </div>
                </i>
            </div>
            <div className="left-btn-list">
                <button className={ this.state.listType == this.types['active'] ? 'active' : ''} onClick={this.changeListType.bind(this, this.types['active'])}>active</button>
                <button className={ this.state.listType == this.types['vk'] ? 'active' : ''} onClick={this.changeListType.bind(this, this.types['vk'])}>vk</button>
            </div>
            <div className="contact-list">
                { this.state.listType == this.types['vk'] ? <ContactsList/> : <FriendsList/>}
            </div>
        </div>)
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
        searchFriends: (searchKey) => {
            dispatch(searchFriends(searchKey))
                .then((response) => {
                    if(!response.error) {
                        dispatch(searchFriendsSuccess(response.payload.data));
                    } else {
                    }
                });
        }
    })
)(LeftBar);