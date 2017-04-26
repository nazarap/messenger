import React from 'react';

export default class MessageList extends React.Component {
    render() {
        let messages = [];

        let list = messages.map(function (message) {
            return (
                <div className="message-item" key={message.id}>
                    <img src={message.userImageURL}/>
                    <div className="message-info">
                        <h4>{message.userName}</h4>
                        <p>{message.message}</p>
                    </div>
                    <div className="message-clock">
                        <strong>{message.displayDate()}</strong>
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
