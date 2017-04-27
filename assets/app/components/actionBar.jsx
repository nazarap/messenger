import React from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';
import { getUser, getUserSuccess } from '../actions/users';
import { browserHistory } from 'react-router';

class ActionBar extends React.Component {

    componentDidMount() {
        if(sessionStorage.getItem('authToken') && !this.props.userStore.user.id) {
            this.props.getUser()
        }
        if(!sessionStorage.getItem('authToken') && !this.props.userStore.user.id) {
            browserHistory.push('/login');
        }
    }

    logout() {
        sessionStorage.removeItem('authToken');
        browserHistory.push('/login');
    }

    render() {
        let user = this.props.userStore.user;
        return (
            <div>
                <header>
                    <Link to={`/messaging`}>
                        <h1>Messenger</h1>
                    </Link>
                    <div className="right-menu" onClick={this.logout.bind(this)}>
                        <h4>{user.first_name}</h4>
                        <img src={user.img}/>
                        <i className="fa fa-caret-down" aria-hidden="true"></i>
                    </div>
                </header>
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
