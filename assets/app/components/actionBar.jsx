import React from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';
import { getUser, getUserSuccess } from '../actions/users';
import { browserHistory } from 'react-router';

class ActionBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpenMenu: false,
            isOpenSettings: false
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.closeMenu.bind(this), true);
        if(localStorage.getItem('authToken') && !this.props.userStore.user.id) {
            this.props.getUser()
        }
        if(!localStorage.getItem('authToken') && !this.props.userStore.user.id) {
            browserHistory.push('/login');
        }
    }

    logout() {
        localStorage.removeItem('authToken');
        browserHistory.push('/login');
    }

    settingsPopup(isOpen) {
        this.setState({ isOpenMenu: false, isOpenSettings: isOpen });
    }

    openMenu() {
        this.setState({isOpenMenu: true});
    }

    closeMenu() {
        this.setState({isOpenMenu: false});
    }

    render() {
        let user = this.props.userStore.user;
        return (
            <div>
                <header>
                    <Link to={`/messaging`}>
                        <h1>Messenger</h1>
                    </Link>
                    <div className="right-menu" onClick={this.openMenu.bind(this)}>
                        <h4>{user.first_name}</h4>
                        <img src={user.img}/>
                        <i className="fa fa-caret-down" aria-hidden="true"></i>
                    </div>
                    <div className={this.state.isOpenMenu ? 'top-dropdown-menu' : 'top-dropdown-menu-close'}>
                        <ul>
                            <li onClick={this.settingsPopup.bind(this, true)}>Settings</li>
                            <hr></hr>
                            <li onClick={this.logout.bind(this)}>Log out</li>
                        </ul>
                    </div>
                </header>
                {
                    this.state.isOpenSettings ?
                        <div>
                            <div className="popup-background"></div>
                            <div className="setting-popup">
                                <div className="popup-header">
                                    <div className="main-header">
                                        <h4>Settings</h4>
                                        <div className="btn-s">
                                            <button>Save</button>
                                            <button onClick={this.settingsPopup.bind(this, false)}>Cancel</button>
                                        </div>
                                    </div>
                                    <div className="image">
                                        <img src={user.img}/>
                                        <i className="fa fa-camera-retro" aria-hidden="true"></i>
                                    </div>
                                    <input placeholder="First name" value={user.first_name}/>
                                    <input placeholder="Last name" value={user.last_name}/>
                                </div>
                                <div className="popup-content">
                                    <div>
                                        <div className="password-block">
                                            <input placeholder="Login" value={user.login}/>
                                        </div>
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                    </div>
                                    <div>
                                        <div className="password-block">
                                            <input placeholder="Old password"/>
                                            <input placeholder="New password"/>
                                            <input placeholder="Repeat new password"/>
                                        </div>
                                        <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div> : ''
                }

                {this.props.children}
            </div>
        )
    }
}

export default connect(
    state => ({
        userStore: state.user
    }),
    dispatch => ({
        getUser: () => {
            dispatch(getUser())
                .then((response) => {
                    if(!response.error) {
                        dispatch(getUserSuccess(response.payload.data));
                    } else {
                    }
                });
        }
    }
)
)(ActionBar);
