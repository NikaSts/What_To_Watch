import React, {PureComponent} from 'react';
import {number, func} from 'prop-types';
import {DEFAULT_RATING} from '../../utils/consts';

const withFormHandlers = (Component) => {
  class Wrapper extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: DEFAULT_RATING,
        comment: null
      };

      this._handleFormSubmit = this._handleFormSubmit.bind(this);
      this._handleRatingChange = this._handleRatingChange.bind(this);
      this._handleCommentChange = this._handleCommentChange.bind(this);
    }

    _handleRatingChange(evt) {
      this.setState({
        rating: evt.target.value
      });
    }

    _handleCommentChange(evt) {
      this.setState({
        comment: evt.target.value
      });
    }

    _handleFormSubmit(evt) {
      const {id, onFormSubmit} = this.props;

      evt.preventDefault();

      onFormSubmit(id, {
        rating: this.state.rating,
        comment: this.state.comment,
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          onFormSubmit={this._handleFormSubmit}
          onRatingChange={this._handleRatingChange}
          onCommentChange={this._handleCommentChange}
          isValid={Boolean(this.state.comment) && Boolean(this.state.rating > DEFAULT_RATING)}
        />
      );
    }
  }

  Wrapper.propTypes = {
    id: number.isRequired,
    onFormSubmit: func.isRequired,
  };

  return Wrapper;
};

export default withFormHandlers;
