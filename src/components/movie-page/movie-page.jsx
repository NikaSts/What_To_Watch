import React, {Fragment, PureComponent} from 'react';
import {connect} from 'react-redux';
import {number, func} from 'prop-types';

import PageFooter from '../page-footer/page-footer';
import MovieCardFull from '../movie-card-full/movie-card-full';
import Catalog from '../catalog/catalog';
import ErrorPage from '../error-page/error-page';
import {getMovie} from '../../store/movies/selectors';
import {Operation as MovieOperation} from '../../store/movies/actions';

import {movieType} from '../../types';
import {Page} from '../../utils/consts';


class MoviePage extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {loadReviews, id} = this.props;
    loadReviews(id);
  }

  render() {
    const {id, activeMovie} = this.props;
    if (!activeMovie) {
      return <ErrorPage />;
    }
    return (
      <Fragment>
        <MovieCardFull
          currentPage={Page.MOVIE_PAGE}
          id={id}
          activeMovie={activeMovie}
        />
        <div className="page-content">
          <Catalog
            currentPage={Page.MOVIE_PAGE}
            id={id}
            activeItem={activeMovie.genre}
          />
          <PageFooter />
        </div>
      </Fragment>
    );
  }
}

MoviePage.propTypes = {
  id: number.isRequired,
  activeMovie: movieType,
  loadReviews: func.isRequired,
};

const mapStateToProps = (state, props) => ({
  activeMovie: getMovie(state, props.id),
});

const mapDispatchToProps = (dispatch) => ({
  loadReviews(movieId) {
    dispatch(MovieOperation.loadReviews(movieId));
  }
});

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
