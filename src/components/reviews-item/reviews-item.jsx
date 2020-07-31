import React from 'react';
import {shape, number, string} from 'prop-types';
import moment from 'moment';

const ReviewsItem = ({review: {user, rating, comment, date}}) => (
  <div className="review">
    <blockquote className="review__quote">
      <p className="review__text">{comment}</p>

      <footer className="review__details">
        <cite className="review__author">{user.name}</cite>
        <time className="review__date" dateTime={moment(date).format(`YYYY-MM-DD`)}>
          {moment(date).format(`LL`)}
        </time>
      </footer>
    </blockquote>

    <div className="review__rating">{rating}</div>
  </div>
);

ReviewsItem.propTypes = {
  review: shape({
    id: number.isRequired,
    user: shape({
      id: number.isRequired,
      name: string.isRequired,
    }).isRequired,
    rating: number.isRequired,
    comment: string.isRequired,
    date: string.isRequired,
  })
};

export default ReviewsItem;
