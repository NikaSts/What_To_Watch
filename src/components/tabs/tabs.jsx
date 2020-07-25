import React from 'react';
import cn from 'classnames';
import Overview from '../overview/overview';
import Reviews from '../reviews/reviews';
import Details from '../details/details';

import {tabs, Tab} from '../../utils/consts';
import {movieType} from '../../types';
import {string, func} from 'prop-types';
import {getRatingLevel} from '../../utils/funcs';

const renderActiveTab = (activeTab, activeMovie) => {
  const {runTime, genre, releaseDate, ratingScore, ratingCount,
    description, director, stars} = activeMovie;
  const ratingLevel = getRatingLevel(ratingScore);

  switch (activeTab) {
    case Tab.REVIEWS:
      return <Reviews />;
    case Tab.DETAILS:
      return <Details
        runTime={runTime}
        genre={genre}
        releaseDate={releaseDate}
        director={director}
        stars={stars}
      />;
    default:
      return <Overview
        ratingScore={ratingScore}
        ratingLevel={ratingLevel}
        ratingCount={ratingCount}
        description={description}
        director={director}
        stars={stars}
      />;
  }
};

const Tabs = ({activeMovie, activeItem, onItemClick}) => (
  <div className="movie-card__desc">
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {tabs.map((tabName) => {
          const isActive = activeItem === tabName;
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
                onClick={() => onItemClick(tabName)}>
                {tabName}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
    {renderActiveTab(activeItem, activeMovie)}
  </div>
);

Tabs.defaultProps = {
  activeItem: Tab.OVERVIEW,
};

Tabs.propTypes = {
  activeItem: string.isRequired,
  onItemClick: func.isRequired,
  activeMovie: movieType,
};

export default Tabs;
