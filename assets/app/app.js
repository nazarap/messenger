import React from 'react';
import ReactDOM from 'react-dom';

import LeftBar from './components/leftBar.jsx';
import MessageList from './components/messageList.jsx';

export default class App extends React.Component {
    render() {
        return ( <div><LeftBar/><MessageList/></div> )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));