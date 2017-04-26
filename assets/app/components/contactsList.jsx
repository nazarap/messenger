import React from 'react';
import Contact from '../domain/Contact';

export default class ContactsList extends React.Component {
    render() {
        let contacts = [
            new Contact(1, "Nazar", "Oryschuk", "https://pp.userapi.com/c631520/v631520122/404a7/19cw3JvnFq8.jpg"),
            new Contact(2, "Nazar", "Oryschuk", "https://pp.userapi.com/c631520/v631520122/404a7/19cw3JvnFq8.jpg"),
            new Contact(3, "Nazar", "Oryschuk", "https://pp.userapi.com/c631520/v631520122/404a7/19cw3JvnFq8.jpg"),
            new Contact(4, "Nazar", "Oryschuk", "https://pp.userapi.com/c631520/v631520122/404a7/19cw3JvnFq8.jpg")
        ];

        let list = contacts.map(function (contact) {
            return (
                <li key={contact.id}>
                    <img src={contact.imageURL}/>
                    <div className="message-info">
                        <h4>{contact.firstName}</h4>
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