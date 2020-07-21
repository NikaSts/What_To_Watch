import React, {PureComponent, Fragment} from 'react';
import ShowMoreButton from '../../components/show-more-button/show-more-button.jsx';
import {arrayOf, func} from 'prop-types';
import {cardMovieType} from '../../types.js';
import {MOVIES_TO_SHOW_COUNT} from '../../utils/consts';

const withShowMoreButton = (Component) => {
  class Wrapper extends PureComponent {
    constructor(props) {
      super(props);
      const moviesToShow = props.movies.slice(0, MOVIES_TO_SHOW_COUNT);
      this.state = {
        moviesToShow,
      };

      this._handleShowMoreButtonClick = this._handleShowMoreButtonClick.bind(this);
    }

    componentDidUpdate(prevState) {
      if (prevState !== this.props) {
        const moviesToShow = this.props.movies.slice(0, MOVIES_TO_SHOW_COUNT);
        this.setState({
          moviesToShow,
        });
      }
    }

    _handleShowMoreButtonClick() {
      const {movies} = this.props;
      this.setState((prevState) => {
        return ({
          moviesToShow: [
            ...prevState.moviesToShow,
            ...movies.slice(
                prevState.moviesToShow.length,
                prevState.moviesToShow.length + MOVIES_TO_SHOW_COUNT
            )
          ]
        }
        );
      });
    }

    render() {
      const {moviesToShow} = this.state;
      const {movies, onMovieTitleClick} = this.props;
      return (
        <Fragment>
          <Component
            movies={moviesToShow}
            onMovieTitleClick={onMovieTitleClick}
          />
          {(moviesToShow.length < movies.length) && <ShowMoreButton
            onShowMoreButtonClick={this._handleShowMoreButtonClick}
          />}
        </Fragment>

      );
    }
  }
  Wrapper.propTypes = {
    movies: arrayOf(cardMovieType.isRequired).isRequired,
    onMovieTitleClick: func.isRequired,
  };

  return Wrapper;
};


export default withShowMoreButton;
