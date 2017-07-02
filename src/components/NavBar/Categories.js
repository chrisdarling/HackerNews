import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Categories(props) {
    const { navigation: { categories, activeTab }, onClick } = props;
    return (
        <ul className="nav-list">
            <li className="nav-list-items nav-title">
                <Link to="/"><Logo /></Link>
            </li>
            {categories.map((item, index) => {
                const cn = classNames('nav-list-items', {'nav-active': activeTab === item});
                return (
                    <li key={`nav-bar-item-${index}`} onClick={() => onClick(item)} className={cn}>
                        <Link to={`/${item}`} className="nav-list-link">{item}</Link>
                    </li>
                );
            })}
        </ul>
    );
}