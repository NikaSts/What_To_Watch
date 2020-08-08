import * as React from 'react';
import cn from 'classnames';
import Overview from '../overview/overview';
import Reviews from '../reviews/reviews';
import Details from '../details/details';
import {tabs, Tab} from '../../utils/consts';
import {MovieType, ReviewType} from '../../types';
import {getRatingLevel} from '../../utils/funcs';

interface TabsProps {
  activeItem: string;
  activeMovie: MovieType;
  reviews: Array<ReviewType>;
  onItemClick: (tabName: string) => void;
}

const renderActiveTab = (
    activeTab: string, activeMovie: MovieType, reviews: Array<ReviewType>
) => {
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

const Tabs: React.FC<TabsProps> = ({
  activeMovie, activeItem, reviews, onItemClick
}: TabsProps) => (
  <div className="movie-card__desc">
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {tabs.map((tabName) => {
          const isActive: boolean = activeItem === tabName;
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

export default Tabs;
