import React from 'react';
import Message from '../domain/Message';

export default class MessageList extends React.Component {
    render() {
        let messages = [new Message(1), new Message(2), new Message(3), new Message(4)];

        let list = messages.map(function (message) {
            return (
                <li key={message.id}>{message.toString()}</li>
            );
        });
        return (<div className="message-list">
                    <header>
                        <img></img>
                        HEADER
                    </header>
                    <article>
                        <ul>
                            {list}
                        </ul>
                    </article>
                    <footer>
                        <input></input>
                        <button>sent</button>
                    </footer>
                </div> )
    }
}