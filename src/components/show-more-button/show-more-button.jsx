import React from 'react';
import {func} from 'prop-types';

const ShowMoreButton = ({onShowMoreButtonClick}) => {
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={onShowMoreButtonClick}>
        Show more
      </button>
    </div>
  );
};

ShowMoreButton.propTypes = {
  onShowMoreButtonClick: func.isRequired,
};

export default ShowMoreButton;
