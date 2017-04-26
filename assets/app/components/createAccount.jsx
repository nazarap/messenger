import React from 'react';
import { Link } from 'react-router'

export default class CreateAccount extends React.Component {
    render() {
        return (
            <div>
                <header className="login-header"></header>

                <div className="login-block account-create-block">
                    <img src="https://pp.userapi.com/c626722/v626722705/1a8d5/SxV2AnGSHLc.jpg"/>
                    <input placeholder="First name"/>
                    <input placeholder="Last name"/>
                    <input placeholder="Login"/>
                    <input placeholder="Password" type="password"/>
                    <input placeholder="Repeat password" type="password"/>
                    <Link to={`/messaging`}>
                        <button className="next-btn">Create <i className="fa fa-angle-right" aria-hidden="true"></i></button>
                    </Link>
                </div>
            </div>
        )
    }
}