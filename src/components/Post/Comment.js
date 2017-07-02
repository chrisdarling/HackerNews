import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export default class Comment extends Component  {
    constructor(props) {
        super(props);

        this.state = { open: true };
        this.toggleCommentCollapse = this.toggleCommentCollapse.bind(this);
    }
    static defaultProps = {
        comments: [],
    }

    static propTypes = {
        user: PropTypes.string,
        time_ago: PropTypes.string,
        comments: PropTypes.array,
        content: PropTypes.any,
    }

    get createMarkup() {
        const { content } = this.props;
        return { __html: content || '' };
    }

    toggleCommentCollapse() {
        this.setState({
            open: !this.state.open,
        });
    }

    render() {
        const { user, comments, time_ago, level } = this.props;
        const { open } = this.state;
        const toggleClass = classNames({ 'open': open, 'close': !open });
        const commentClass = classNames('hacker-news-comment', { 'first-level': level === 0 })
        const childComments = comments.length ? comments.map(item => <Comment key={item.id} {...item} />) : null;
        return (
            <div className={commentClass}>
                <div className="hacker-news-comment-user">
                    <span className="collapse" onClick={this.toggleCommentCollapse}>{ open ? '[ - ]' : '[ + ]' }</span>
                    <Link className="user" to={`/user/${user}`}>  {user} </Link>
                    {time_ago}
                </div>
                <div className={toggleClass}>
                    <div className="hacker-news-comment-content" dangerouslySetInnerHTML={this.createMarkup}></div>
                    {childComments}
                </div>
            </div>
        );
    }
    
}
