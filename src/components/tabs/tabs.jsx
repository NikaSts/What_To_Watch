import React from 'react';
import {tabs} from '../../utils/consts';
import {string, func} from 'prop-types';


const Tabs = ({activeTab, onTabClick}) => (
  <nav className="movie-nav movie-card__nav">
    <ul className="movie-nav__list">
      {tabs.map((tabName) => {
        const activeClass = activeTab === tabName ? `movie-nav__item--active` : ``;
        return (
          <li
            key={tabName}
            className={`movie-nav__item ${activeClass}`}>
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
