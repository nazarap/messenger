import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getContacts, getContactsSuccess } from '../actions/contacts';

class ContactsList extends React.Component {
    static contextTypes = {
        router: PropTypes.object
    };

    componentDidMount() {
        this.props.getContactsList()
    }

    openDialog(item) {
        this.props.isActive = item;
        this.props.contactsStore.contacts = this.props.contactsStore.contacts;
    }

    render() {
        let contacts = this.props.contactsStore.contacts;

        let list = contacts.map( contact => {
            return (
                <li key={contact.id} onClick={this.openDialog.bind(this, contact)}>
                    <img src={contact.img}/>
                    <div className="message-info contacts-info">
                        <h4>{contact.first_name} {contact.last_name}</h4>
                        {contact.active ? <div className="active-contact"><div></div> active</div> : ''}
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
    contactsStore: state.contacts
  }),
  dispatch => ({
    getContactsList: () => {
        dispatch(getContacts())
            .then((response) => {
                if(!response.error) {
                    dispatch(getContactsSuccess(response.payload.data));
                } else {
                }
        });
    }
  })
)(ContactsList);
