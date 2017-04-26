import React from 'react';
import { Link } from 'react-router'

export default class ActionBar extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Telegram</h1>
                    <Link to={`/login`}>
                        <div className="right-menu">
                            <h4>{this.props.route.user.firstName}</h4>
                            <img src={this.props.route.user.imageURL}/>
                            <i className="fa fa-caret-down" aria-hidden="true"></i>
                        </div>
                    </Link>
                </header>
                {this.props.children}
            </div>
        )
    }
}