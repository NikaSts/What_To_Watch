import * as React from 'react';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import {MovieType} from '../../types';
import {MOVIES_TO_SHOW_COUNT} from '../../utils/consts';

interface WrapperProps {
  movies: Array<MovieType>;
}

interface WrapperState {
  moviesToShow: Array<MovieType>;
}

const withShowMoreButton = (Component) => {
  class Wrapper extends React.PureComponent<WrapperProps, WrapperState> {
    constructor(props) {
      super(props);
      const moviesToShow = props.movies.slice(0, MOVIES_TO_SHOW_COUNT);
      this.state = {
        moviesToShow,
      };

      this.handleShowMoreButtonClick = this.handleShowMoreButtonClick.bind(this);
    }

    componentDidUpdate(prevState) {
      if (prevState !== this.props) {
        this.updateState();
      }
    }

    updateState() {
      const moviesToShow = this.props.movies.slice(0, MOVIES_TO_SHOW_COUNT);
      this.setState({
        moviesToShow,
      });
    }

    private handleShowMoreButtonClick() {
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
        });
      });
    }

    render() {
      const {moviesToShow} = this.state;
      const {movies} = this.props;
      return (
        <React.Fragment>
          <Component
            movies={moviesToShow}
          />
          {(moviesToShow.length < movies.length) && <ShowMoreButton
            onShowMoreButtonClick={this.handleShowMoreButtonClick}
          />}
        </React.Fragment>

      );
    }
  }

  return Wrapper;
};


export default withShowMoreButton;
