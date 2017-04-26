import React from 'react';
import Message from '../domain/Message';

export default class MessageList extends React.Component {
    render() {
        let messages = [
            new Message(1, "Nazar Oryschuk", false, "https://pp.userapi.com/c631520/v631520122/404a7/19cw3JvnFq8.jpg", new Date(new Date().setDate(14)), "В тестировании принимали участие актуальные версии браузеров Chrome, Firefox, Opera, Safari и Internet Explorer (IE)"),
            new Message(2, "Nazar Oryschuk", false, "https://pp.userapi.com/c631520/v631520122/404a7/19cw3JvnFq8.jpg", new Date(new Date().setDate(16)), "В тестировании принимали участие актуальные версии браузеров Chrome, Firefox, Opera, Safari и Internet Explorer (IE)"),
            new Message(3, "Nazar Oryschuk", false, "https://pp.userapi.com/c631520/v631520122/404a7/19cw3JvnFq8.jpg", new Date(new Date().setDate(17)), "В тестировании принимали участие актуальные версии браузеров Chrome, Firefox, Opera, Safari и Internet Explorer (IE)"),
            new Message(4, "Nazar Oryschuk", false, "https://pp.userapi.com/c631520/v631520122/404a7/19cw3JvnFq8.jpg", new Date(), "В тестировании принимали участие актуальные версии браузеров Chrome, Firefox, Opera, Safari и Internet Explorer (IE)"),
            new Message(5, "Nazar Oryschuk", false, "https://pp.userapi.com/c631520/v631520122/404a7/19cw3JvnFq8.jpg", new Date(), "В тестировании принимали участие актуальные версии браузеров Chrome, Firefox, Opera, Safari и Internet Explorer (IE)"),
        ];

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