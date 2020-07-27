import React from 'react';
import ReviewsItem from '../reviews-item/reviews-item';
import {shape, arrayOf, number, string} from 'prop-types';

const Reviews = ({reviews}) => {
  const reviewsHalfCount = reviews && Math.ceil(reviews.length / 2);
  const firstColumn = reviews && reviews.slice(0, reviewsHalfCount);
  const secondColumn = reviews && reviews.slice(reviewsHalfCount);

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {firstColumn.map((review) => (
          <ReviewsItem
            key={review.id}
            review={review}
          />
        ))}
      </div>

      <div className="movie-card__reviews-col">
        {secondColumn.map((review) => (
          <ReviewsItem
            key={review.id}
            review={review}
          />
        ))}
      </div>
    </div>
  );
};

Reviews.propTypes = {
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

export default Reviews;
