import React, {Fragment, PureComponent} from 'react';
import {func, arrayOf} from 'prop-types';
import {connect} from 'react-redux';
import {changeActiveMovie} from '../../store/actions';
import MovieInfo from '../movie-info/movie-info.jsx';
import MovieList from '../movie-list/movie-list.jsx';
import PageHeader from '../page-header/page-header.jsx';
import PageContent from '../page-content/page-content.jsx';
import PageFooter from '../page-footer/page-footer.jsx';
import Tabs from '../tabs/tabs.jsx';
import Overview from '../overview/overview.jsx';
import Reviews from '../reviews/reviews.jsx';
import Details from '../details/details.jsx';
import {movieType, cardMovieType} from '../../types';
import {Tab, MAX_SIMILAR_MOVIES} from '../../utils/consts';
import {filterMovies} from '../../utils/funcs';


class MoviePage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: Tab.OVERVIEW,
    };

    this._handleTabClick = this._handleTabClick.bind(this);
  }

  _handleTabClick(activeTab) {
    this.setState({activeTab});
  }

  _renderActiveTab(activeTab, activeMovie) {
    const {runTime, genre, releaseDate, ratingScore, ratingLevel, ratingCount,
      text, director, starring} = activeMovie;
    switch (activeTab) {
      case Tab.REVIEWS:
        return <Reviews />;
      case Tab.DETAILS:
        return <Details
          runTime={runTime}
          genre={genre}
          releaseDate={releaseDate}
          director={director}
          starring={starring}
        />;
      default:
        return <Overview
          ratingScore={ratingScore}
          ratingLevel={ratingLevel}
          ratingCount={ratingCount}
          text={text}
          director={director}
          starring={starring}
        />;
    }
  }

  render() {
    const {activeMovie, movies, onMovieTitleClick} = this.props;
    const {id, title, genre, releaseDate, image} = activeMovie;
    const {activeTab} = this.state;
    const moviesToShow = filterMovies(movies, activeMovie.genre).splice(0, MAX_SIMILAR_MOVIES);

    return (
      <Fragment>
        <section key={id} className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={`img/${image}.jpg`} alt={title} />
            </div>
            <h1 className="visually-hidden">WTW</h1>
            <PageHeader />

            <div className="movie-card__wrap">
              <MovieInfo
                title={title}
                genre={genre}
                releaseDate={releaseDate}
                isLogged={true}
              />
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={`img/${image}.jpg`} alt={title} width="218" height="327" />
              </div>

              <div className="movie-card__desc">
                <Tabs
                  activeTab={activeTab}
                  onTabClick={this._handleTabClick}
                />
                {this._renderActiveTab(activeTab, activeMovie)}
              </div>

            </div>
          </div>
        </section>

        <PageContent>
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <MovieList
              movies={moviesToShow}
              onMovieTitleClick={onMovieTitleClick}
            />
          </section>
          <PageFooter />
        </PageContent>
      </Fragment>
    );
  }
}

MoviePage.propTypes = {
  activeMovie: movieType,
  movies: arrayOf(cardMovieType.isRequired).isRequired,
  onMovieTitleClick: func.isRequired,
};

const mapStateToProps = ({movies, activeMovie}) => ({movies, activeMovie});

const mapDispatchToProps = (dispatch) => ({
  onMovieTitleClick(activeMovie) {
    dispatch(changeActiveMovie(activeMovie));
  }
});


export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
