import React from 'react';

import LeftBar from './leftBar.jsx';
import MessageContent from './messageContent.jsx';

export default class Messaging extends React.Component {
    render() {
        document.cookie = "token=123";
        return ( <div className="content"><LeftBar/><MessageContent /></div> )
    }
}
