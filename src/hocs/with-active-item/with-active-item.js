import React, {PureComponent} from 'react';

const withActiveItem = (Component) => {
  class Wrapper extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeItem: undefined,
      };
      this._handleItemClick = this._handleItemClick.bind(this);
    }

    _handleItemClick(activeItem) {
      this.setState({activeItem});
    }

    render() {
      const {activeItem} = this.state;
      return <Component
        {...this.props}
        activeItem={activeItem}
        onItemClick={this._handleItemClick}
      />;
    }
  }
  return Wrapper;
};

export default withActiveItem;
