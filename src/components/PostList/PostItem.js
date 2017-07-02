import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { timeSince } from '../../helpers';

export default function PostItem(props) {
    const { num, title, score, time, descendants, by, url, id } = props;
    const date = moment.unix(time);
    const timeago = date ? timeSince(date) : null;
    const points = score ? `${score} points by ` : '0 points';
    const comments = descendants ? `${descendants} comments` : '0 comments';
    const postURL = url ? new window.URL(url) : null;
    return (
        <div className="hacker-news-post-list-item">
            <div className="__post-item-num"><h4>{num}</h4></div>
            <div className="__post-item-content">
                <h5>
                    <a href={url}>{title}</a>
                    <span className="__post-url">{postURL ? ` (${postURL.host})` : ''}</span>
                </h5>
                <span className="__post-item-info">
                    {points}
                    <Link to={`/user/${by}`} className="__post-link">{by}</Link> {timeago} | <Link to={`/post/${id}`} className="__post-link">{comments}</Link>
                </span>
            </div>
        </div>
    );
}