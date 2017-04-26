import React from 'react';
import ContactsList from './contactsList.jsx';

export default class LeftBar extends React.Component {
    render() {
        return (<div className="left-bar">
            <div className="search-block">
                <input placeholder="Search ... "/>
            </div>
            <div className="contact-list">
                <ContactsList/>
            </div>
        </div>)
    }
}