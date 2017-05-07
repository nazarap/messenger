import React from 'react';
import ContactsList from './contactsList.jsx';
import FriendsList from './friendsList.jsx';

export default class LeftBar extends React.Component {

    constructor(props) {
        super(props);

        this.types = {
            'active': 1,
            'vk': 2
        };

        this.state = {
            listType: this.types['active']
        }
    }

    changeListType(type) {
        this.setState({listType: type});
    }

    render() {
        return (<div className="left-bar">
            <div className="search-block">
                <i className="fa fa-search" aria-hidden="true"></i>
                <input placeholder="Search ... "/>
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
