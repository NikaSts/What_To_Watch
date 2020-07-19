import React from 'react';
import cn from 'classnames';
import {tabs} from '../../utils/consts';
import {string, func} from 'prop-types';


const Tabs = ({activeTab, onTabClick}) => (
  <nav className="movie-nav movie-card__nav">
    <ul className="movie-nav__list">
      {tabs.map((tabName) => {
        const isActive = activeTab === tabName;
        const tabClass = cn({
          'movie-nav__item': true,
          'movie-nav__item--active': isActive,
        });
        return (
          <li
            key={tabName}
            className={tabClass}>
            <a
              href="#"
              className="movie-nav__link"
              onClick={() => onTabClick(tabName)}>
              {tabName}
            </a>
          </li>
        );
      })}
    </ul>
  </nav>
);

Tabs.propTypes = {
  activeTab: string.isRequired,
  onTabClick: func.isRequired,
};

export default Tabs;
