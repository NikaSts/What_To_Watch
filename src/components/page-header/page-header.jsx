import React, {Fragment} from 'react';
import {string} from 'prop-types';

const PageHeader = ({title, backgroundImage}) => (
  <Fragment>
    <div className="movie-card__bg">
      <img src={backgroundImage} alt={title} />
    </div>
    <h1 className="visually-hidden">WTW</h1>

    <header className="page-header movie-card__head">
      <div className="logo">
        <a className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="user-block">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </div>
    </header>
  </Fragment>
);

PageHeader.propTypes = {
  title: string.isRequired,
  backgroundImage: string.isRequired,
};

export default PageHeader;
