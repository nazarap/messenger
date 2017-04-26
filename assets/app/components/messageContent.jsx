import React from 'react';
import MessageList from './messageList.jsx';

export default class MessageContent extends React.Component {

    render() {
        return (
            <div className="message-block">
                <div className="header">
                    <img src="https://pp.userapi.com/c631520/v631520122/404a7/19cw3JvnFq8.jpg"/>
                    <h4>Nazar Oryschuk</h4>
                    <i className="fa fa-cog" aria-hidden="true"></i>
                </div>
                <MessageList/>
                <div className="message-send">
                    <input/>
                    <button>
                        <i className="fa fa-paper-plane" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        )
    }
}