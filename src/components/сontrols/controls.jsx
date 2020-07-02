import React from 'react';
import {bool} from 'prop-types';

const Controls = (props) => {
  const {isLogged} = props;
  const reviewLink = isLogged && <a href="add-review.html" className="btn movie-card__button">Add review</a>;

  return (
    <div className="movie-card__buttons">
      <button className="btn btn--play movie-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button className="btn btn--list movie-card__button" type="button">
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
        <span>My list</span>
      </button>
      {reviewLink}
    </div>
  );
};

Controls.propTypes = {
  isLogged: bool.isRequired,
};

export default Controls;
