import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.css';

export default class Pager extends Component {
    constructor(...args) {
        super(...args);

        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    static propTypes = {
        lastSearch: PropTypes.object,
        totalItems:  PropTypes.number,
        onNextPage: PropTypes.func,
    }

    handlePrev(page) {
        if (page > 1) {
            this.props.onNextPage({
                skip: (page - 2) * 15,
                take: 15,
            })
        }
    }

    handleNext(page, totalPages) {
          if (page !== totalPages) {
            this.props.onNextPage({
                skip: page * 15,
                take: 15,
            })
        }
    }

    render() {
        const { totalItems, lastSearch: { skip, take } } = this.props;
        const totalPages = Math.ceil(totalItems / take);
        const page = Math.ceil(((skip - 1) / take) + 1);
        const prevClass = classnames('pager-item pager', { 'disable': page === 1 });
        const moreClass = classnames('pager-item pager', { 'disable': page === totalPages });
        return (
            <div className="hackernews-pager">
                <div className={prevClass} onClick={() => this.handlePrev(page)}>
                    <span>&#9668; Prev</span>
                </div>
                <div className="pager-item">Page {page} of {totalPages}</div>
                <div className={moreClass} onClick={() => this.handleNext(page, totalPages)}>
                    <span>More &#9658;</span>
                </div>
            </div>
        )
    }
}