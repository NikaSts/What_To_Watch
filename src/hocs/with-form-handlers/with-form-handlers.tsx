import * as React from 'react';
import {Subtract} from 'utility-types';
import {DEFAULT_RATING} from '../../utils/consts';

interface WrapperProps {
  id: number;
  onFormSubmit: (id: number, review: {
    rating: number;
    comment: string | null;
  }) => void;
}

interface WrapperState {
  rating: number;
  comment: string | null;
}

interface InjectingProps {
  isValid: boolean;
  onCommentChange: () => void;
  onRatingChange: () => void;
}

const withFormHandlers = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class Wrapper extends React.PureComponent<WrapperProps, WrapperState> {
    constructor(props) {
      super(props);

      this.state = {
        rating: DEFAULT_RATING,
        comment: null
      };

      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleRatingChange = this.handleRatingChange.bind(this);
      this.handleCommentChange = this.handleCommentChange.bind(this);
    }

    private handleRatingChange(evt) {
      this.setState({
        rating: evt.target.value
      });
    }

    private handleCommentChange(evt) {
      this.setState({
        comment: evt.target.value
      });
    }

    private handleFormSubmit(evt) {
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
          onFormSubmit={this.handleFormSubmit}
          onRatingChange={this.handleRatingChange}
          onCommentChange={this.handleCommentChange}
          isValid={Boolean(this.state.comment) && Boolean(this.state.rating > DEFAULT_RATING)}
        />
      );
    }
  }

  return Wrapper;
};

export default withFormHandlers;
