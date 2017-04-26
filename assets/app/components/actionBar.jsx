import React from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';
import { getUser, getUserSuccess } from '../actions/users';

class ActionBar extends React.Component {

    componentDidMount() {
        this.props.getUser()
    }

    render() {
        let user = this.props.userStore.user;
        return (
            <div>
                <header>
                    <h1>Celestial</h1>
                    <Link to={`/login`}>
                        <div className="right-menu">
                            <h4>{user.first_name}</h4>
                            <img src={user.img}/>
                            <i className="fa fa-caret-down" aria-hidden="true"></i>
                        </div>
                    </Link>
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
})
)(ActionBar);
