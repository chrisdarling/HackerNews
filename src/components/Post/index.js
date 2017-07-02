import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Comment from './Comment.js';
import Spinner from '../Spinner';
import EmptyState from '../EmptyState';
import * as actions from '../../actions';
import './style.css';

class Post extends Component {
    componentWillMount() {
        const id = window.location.pathname.split('/')[2] * 1;
        this.props.fetchPost(id);
    }
    
    render() {
        const { post: { post, fetching } } = this.props;
        if (fetching) {
            return <Spinner />;
        } else if (post === null) {
            return(
                <EmptyState message="Post does not exist" />
            )
        }

        const { time_ago, user, comments_count, comments, title, url, domain, points } = post;
        const commentList = comments ? comments.map(item => <Comment key={item.id} {...item} />) : null;
        return (
            <div className="hacker-news-post-container">
                <div className="hacker-news-post">
                    <h4>
                        <a href={url}>{title}</a>
                        <span className="__post-url">({domain})</span>
                    </h4>
                    <span className="__post-info">
                        {points} points
                        <Link to={`/user/${user}`} className="__post-link"> {user}</Link> {time_ago}
                    </span>
                </div>
                <div className="hacker-news-comments">
                    <h5>{comments_count} comments</h5>
                    {commentList}
                </div>
            </div>
        );
    }
}

export default connect(({post}) => ({
  post,
}),
  actions,
)(Post);