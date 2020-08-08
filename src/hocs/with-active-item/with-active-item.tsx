import * as React from 'react';
import {Subtract} from 'utility-types';

interface WrapperProps {
  currentPage?: string;
}

interface WrapperState {
  activeItem: string | undefined;
}

interface InjectingProps {
  activeItem: string;
  onItemClick: (activeItem: string) => void;
}

const withActiveItem = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = WrapperProps & Subtract<P, InjectingProps>;

  class Wrapper extends React.PureComponent<T, WrapperState> {
    constructor(props) {
      super(props);
      this.state = {
        activeItem: undefined,
      };
      this.handleItemClick = this.handleItemClick.bind(this);
    }

    private handleItemClick(activeItem) {
      this.setState({activeItem});
    }

    render() {
      const {activeItem} = this.state;
      return <Component
        {...this.props}
        activeItem={activeItem}
        onItemClick={this.handleItemClick}
      />;
    }
  }
  return Wrapper;
};

export default withActiveItem;
