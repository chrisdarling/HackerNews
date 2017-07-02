import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default function EmptyState({ message }) {
    return (
        <div className="hackernews-empty">
            {message}
        </div>
    )
}

EmptyState.propTypes = {
    message: PropTypes.string,
};

EmptyState.defaultProps = {
    message: 'Noting to display',
};