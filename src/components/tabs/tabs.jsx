import React from 'react';
import cn from 'classnames';
import Overview from '../overview/overview';
import Reviews from '../reviews/reviews';
import Details from '../details/details';

import {tabs, Tab} from '../../utils/consts';
import {movieType} from '../../types';
import {string, func, arrayOf, number, shape} from 'prop-types';
import {getRatingLevel} from '../../utils/funcs';

const renderActiveTab = (activeTab, activeMovie, reviews) => {
  const {runTime, genre, releaseDate, ratingScore, ratingCount,
    description, director, stars} = activeMovie;
  const ratingLevel = getRatingLevel(ratingScore);

  switch (activeTab) {
    case Tab.REVIEWS:
      return <Reviews
        reviews={reviews}
      />;
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

const Tabs = ({activeMovie, activeItem, reviews, onItemClick}) => (
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
                onClick={(evt) => {
                  evt.preventDefault();
                  onItemClick(tabName);
                }}>
                {tabName}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
    {renderActiveTab(activeItem, activeMovie, reviews)}
  </div>
);

Tabs.defaultProps = {
  activeItem: Tab.OVERVIEW,
};

Tabs.propTypes = {
  activeItem: string.isRequired,
  onItemClick: func.isRequired,
  activeMovie: movieType,
  reviews: arrayOf(shape({
    id: number.isRequired,
    user: shape({
      id: number.isRequired,
      name: string.isRequired,
    }).isRequired,
    rating: number.isRequired,
    comment: string.isRequired,
    date: string.isRequired,
  })),
};

export default Tabs;
