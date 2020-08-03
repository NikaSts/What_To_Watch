import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {number, string, shape} from 'prop-types';

import {getMovie} from '../../store/movies/selectors';
import {getAuthorizationStatus, getUserData} from '../../store/user/selectors';
import {promoMovieType} from '../../types';
import {AppRoute, TEXTAREA_COLOR, AuthorizationStatus, Page} from '../../utils/consts';
import PageHeader from '../page-header/page-header';

const renderBreadCrumbs = (id, title) => (
  <nav className="breadcrumbs">
    <ul className="breadcrumbs__list">
      <li className="breadcrumbs__item">
        <Link to={`${AppRoute.MOVIE_PAGE}${id}`} className="breadcrumbs__link">
          {title}
        </Link>
      </li>
      <li className="breadcrumbs__item">
        <a className="breadcrumbs__link">Add review</a>
      </li>
    </ul>
  </nav>
);

const AddReview = ({authorizationStatus, id, movie, userData}) => {
  const isAuth = authorizationStatus === AuthorizationStatus.AUTH;

  if (!isAuth) {
    return <Redirect to={AppRoute.LOGIN} />;
  }
  const {backgroundColor, backgroundImage, title, poster} = movie;
  return (
    <section className="movie-card movie-card--full"
      style={{backgroundColor: `${backgroundColor}`}}>
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <PageHeader
          currentPage={Page.REVIEW}
          isAuth={isAuth}
          userData={userData}>
          {renderBreadCrumbs(id, title)}
        </PageHeader>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={poster} alt={`${title} poster`}
            widposterth="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              <input className="rating__input" id="star-1" type="radio" name="rating" value="1"/>
              <label className="rating__label" htmlFor="star-1">Rating 1</label>

              <input className="rating__input" id="star-2" type="radio" name="rating" value="2" />
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input className="rating__input" id="star-3" type="radio" name="rating" value="3"
                checked />
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input className="rating__input" id="star-4" type="radio" name="rating" value="4" />
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input className="rating__input" id="star-5" type="radio" name="rating" value="5" />
              <label className="rating__label" htmlFor="star-5">Rating 5</label>
            </div>
          </div>

          <div
            className="add-review__text"
            style={{backgroundColor: TEXTAREA_COLOR}}>
            <textarea className="add-review__textarea" name="review-text" id="review-text"
              placeholder="Review text"></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>
    </section>
  );
};

AddReview.propTypes = {
  authorizationStatus: string.isRequired,
  id: number,
  userData: shape({
    id: number.isRequired,
    name: string.isRequired,
    email: string.isRequired,
    avatar: string.isRequired,
  }),
  movie: promoMovieType,
};

const mapStateToProps = (state, props) => ({
  movie: getMovie(state, props.id),
  authorizationStatus: getAuthorizationStatus(state),
  userData: getUserData(state),
});

export {AddReview};
export default connect(mapStateToProps)(AddReview);
