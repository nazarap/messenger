import React from 'react';

import LeftBar from './leftBar.jsx';
import MessageContent from './messageContent.jsx';

export default class Messaging extends React.Component {
    render() {
        return ( <div className="content"><LeftBar/><MessageContent /></div> )
    }
}
