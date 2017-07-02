import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import PostItems from './PostItem';
import Spinner from '../Spinner';
import './style.css';

class PostList extends Component {
    componentWillMount() {
        this.props.fetchStories({ 
            skip: 0,
            take: 15,
        });
    }

    componentWillUnmount() {
        this.props.closePostList();
    }

    renderStories() {
        const { stories: { stories } } = this.props;
        return stories.map((p, index) => p ? <PostItems key={p.id} num={index+1} {...p} /> : null)
    }

    render() {
        const { stories: { fetching } } = this.props;
        if (fetching) {
            return <Spinner />;
        }
        return (
            <div className="hacker-news-post-list">
                {this.renderStories()}
            </div>
        );
    }
}

export default connect(({stories}) => ({
  stories,
}),
  actions,
)(PostList);
