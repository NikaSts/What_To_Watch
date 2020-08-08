import * as React from 'react';
import * as moment from 'moment';
import {MACHINE_READABLE_FORMAT, HUMAN_READABLE_FORMAT} from '../../utils/consts';
import {ReviewType} from '../../types';

interface ReviewsItemProps {
  review: ReviewType;
}

const ReviewsItem: React.FC<ReviewsItemProps> = ({
  review: {user, rating, comment, date}
}: ReviewsItemProps) => (
  <div className="review">
    <blockquote className="review__quote">
      <p className="review__text">{comment}</p>

      <footer className="review__details">
        <cite className="review__author">{user.name}</cite>
        <time className="review__date" dateTime={moment(date).format(MACHINE_READABLE_FORMAT)}>
          {moment(date).format(HUMAN_READABLE_FORMAT)}
        </time>
      </footer>
    </blockquote>

    <div className="review__rating">{rating}</div>
  </div>
);


export default ReviewsItem;
