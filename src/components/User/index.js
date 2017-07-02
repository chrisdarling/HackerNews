import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { timeSince } from '../../helpers';
import moment from 'moment';
import Spinner from '../Spinner';
import EmptyState from '../EmptyState';
import './style.css';

class User extends Component {
    componentWillMount() {
        const user = window.location.pathname.split('/')[2];
        this.props.fetchUser(user);
    }
    
    get createMarkup() {
        const { user: { user: { about } } } = this.props;
        return { __html: about || '' };
    }

    render() {
        const { user: { user, fetching } } = this.props;
        if (fetching) {
            return <Spinner />;
        } else if (user === null) {
            return <EmptyState message="User does not exist"/>;
        }
        
        const { created, id, karma } = user;
        const date = moment.unix(created);
        const timeago = date ? timeSince(date) : null;
        return (
            <div className="user-profile-container">
                <div className="user-profile">
                    <h2 className="__username">{id}</h2>
                    <p>Created {timeago}</p>
                    <div dangerouslySetInnerHTML={this.createMarkup} />
                    <h3 className="__karma">&#9733; {karma}</h3>
                </div>
            </div>
        )
    }
}

export default connect(({user}) => ({
  user,
}),
  actions,
)(User);