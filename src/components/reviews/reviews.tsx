import * as React from 'react';
import ReviewsItem from '../reviews-item/reviews-item';
import {ReviewType} from '../../types';

interface ReviewsProps {
  reviews: Array<ReviewType>;
}

const Reviews: React.FC<ReviewsProps> = ({reviews}: ReviewsProps) => {
  const reviewsHalfCount: number = reviews && Math.ceil(reviews.length / 2);
  const firstColumn: Array<ReviewType> = reviews && reviews.slice(0, reviewsHalfCount);
  const secondColumn: Array<ReviewType> = reviews && reviews.slice(reviewsHalfCount);

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


export default Reviews;
