import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Categories from './Categories';
import Pager from '../Pager';
import './style.css'

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.handleNextPage = this.handleNextPage.bind(this);
    }
    
    handleClick(item) {
        this.props.updateActiveTab(item);
        this.props.fetchStories({ skip: 0, take: 15 });
    }

    handleNextPage({ skip, take }) {
        this.props.fetchStories({
            skip,
            take,
        });
    }

    render() {
        const props = this.props;
        const { navigation: { activeTab }, stories, stories: { rendered: showPager } } = this.props;
        return (
            <nav className="hackernews-navigation">
                <Categories onClick={this.handleClick} {...props}/>
                {showPager && <Pager onNextPage={this.handleNextPage} activeTab={activeTab} {...stories} />}
            </nav>
        );
    }   
}

export default connect(({navigation, stories}) => ({
  navigation,
  stories,
}),
  actions,
)(NavBar);