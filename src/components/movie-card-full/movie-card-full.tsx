import * as React from 'react';
import {connect} from 'react-redux';

import MovieInfo from '../movie-info/movie-info';
import PageHeader from '../page-header/page-header';
import Tabs from '../tabs/tabs';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import {getReviews} from '../../store/movies/selectors';
import {getAuthorizationStatus, getUser} from '../../store/user/selectors';
import {Operation as MoviesOperation} from '../../store/movies/actions';
import {MovieType, UserDataType, ReviewType} from '../../types';
import {AuthorizationStatus} from '../../utils/consts';


const TabsWithActiveItem = withActiveItem(Tabs);

interface MovieCardFullProps {
  currentPage: string;
  id: number;
  activeMovie: MovieType;
  authorizationStatus: string;
  reviews: Array<ReviewType>;
  user: UserDataType;
  onIsFavoriteButtonClick: () => void;
}

const MovieCardFull: React.FC<MovieCardFullProps> = ({
  currentPage, id, activeMovie, reviews, authorizationStatus, user, onIsFavoriteButtonClick
}: MovieCardFullProps) => {
  const {
    title, genre, releaseDate, poster, backgroundImage, backgroundColor, isFavorite
  } = activeMovie;
  const isAuth: boolean = authorizationStatus === AuthorizationStatus.AUTH;

  return (
    <section
      key={id}
      className="movie-card movie-card--full"
      style={{backgroundColor: `${backgroundColor}`}}>
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={title} />
        </div>
        <h1 className="visually-hidden">WTW</h1>

        <PageHeader
          isAuth={isAuth}
          currentPage={currentPage}
          user={user}
        />
        <div className="movie-card__wrap">
          <MovieInfo
            currentPage={currentPage}
            id={id}
            title={title}
            genre={genre}
            releaseDate={releaseDate}
            isFavorite={isFavorite}
            onIsFavoriteButtonClick={onIsFavoriteButtonClick}
            isAuth={isAuth}
          />
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={poster} alt={title} width="218" height="327" />
          </div>
          <TabsWithActiveItem
            //           currentPage={currentPage}
            activeMovie={activeMovie}
            reviews={reviews}
          />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  reviews: getReviews(state),
  authorizationStatus: getAuthorizationStatus(state),
  user: getUser(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  onIsFavoriteButtonClick() {
    const {id, isFavorite} = props.activeMovie;
    dispatch(MoviesOperation.sendFavoriteMovie(id, isFavorite));
  },
});


export {MovieCardFull};
export default connect(mapStateToProps, mapDispatchToProps)(MovieCardFull);
