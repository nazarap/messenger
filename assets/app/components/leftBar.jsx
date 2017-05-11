import React from 'react';
import ContactsList from './contactsList.jsx';
import FriendsList from './friendsList.jsx';
import { searchFriends, searchFriendsSuccess, getFriends, getFriendsSuccess } from '../actions/friends';
import { searchContacts, searchContactsSuccess } from '../actions/contacts';
import { connect } from 'react-redux';

class LeftBar extends React.Component {

    constructor(props) {
        super(props);

        this.types = {
            'active': 1,
            'vk': 2,
            'search': 3
        };

        this.searchTypes = {
            0 : 'friends',
            1: 'vk_friends',
            2 : 'users'
        };

        this.state = {
            searchType: this.searchTypes[0],
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
                switch(this.state.searchType) {
                    case this.searchTypes[1]:
                        this.props.searchVkFriends(this.search.value, this);
                        break;
                    case this.searchTypes[0]:
                        this.props.searchFriends(this.search.value, false, this, this.types['active']);
                        break;
                    case this.searchTypes[2]:
                        this.props.searchFriends(this.search.value, true, this, this.types['search']);
                }
            }
        }
    }

    searchCheckListener(changeEvent) {
        this.setState({
            searchType: changeEvent.target.value
        });
    }

    render() {
        return (<div className="left-bar">
            <div className="search-block">
                <i className="fa fa-search" aria-hidden="true"></i>
                <input placeholder="Search ... " ref={(search) => { this.search = search }}
                       onKeyPress={this.findUser.bind(this)}/>
                <i className="fa fa-circle-o-notch" aria-hidden="true">
                    <div className='top-dropdown-menu'>
                        <label className="radio"><input type="radio" value={this.searchTypes[0]} name="search" checked={this.state.searchType === this.searchTypes[0]}
                      onChange={this.searchCheckListener.bind(this)} /><span className="radiobtn"><span className="sp-radiobtn"></span></span>Friends</label>
                        <label className="radio"><input type="radio" value={this.searchTypes[1]} name="search" checked={this.state.searchType === this.searchTypes[1]}
                      onChange={this.searchCheckListener.bind(this)} /><span className="radiobtn"><span className="sp-radiobtn"></span></span>VK Friends</label>
                        <label className="radio"><input type="radio" value={this.searchTypes[2]} name="search" checked={this.state.searchType === this.searchTypes[2]}
                      onChange={this.searchCheckListener.bind(this)} /><span className="radiobtn"><span className="sp-radiobtn"></span></span>Other users</label>
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
        searchFriends: (searchKey, isAll, leftBarThis, type) => {
            dispatch(searchFriends(searchKey, isAll))
                .then((response) => {
                    if(!response.error) {
                        leftBarThis.changeListType(type);
                        dispatch(searchFriendsSuccess(response.payload.data));
                    } else {
                    }
                });
        },
        searchVkFriends: (searchKey, leftBarThis) => {
            dispatch(searchContacts(searchKey))
                .then((response) => {
                    if(!response.error) {
                        leftBarThis.changeListType(leftBarThis.types['vk']);
                        dispatch(searchContactsSuccess(response.payload.data));
                    } else {
                    }
                });
        }
    })
)(LeftBar);
