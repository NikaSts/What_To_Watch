import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withActiveItem from './with-active-item';
import {func} from 'prop-types';

configure({
  adapter: new Adapter(),
});

const MockComponent = ({onItemClick}) => (
  <div>
    <a onClick={onItemClick}>item</a>
  </div>
);

MockComponent.propTypes = {
  onItemClick: func.isRequired,
};

it(`withActiveItem should change activeItem onClick`, () => {
  const MockComponentWrapped = withActiveItem(MockComponent);
  const onItemClick = jest.fn();
  const wrapper = mount(
      <MockComponentWrapped
        onItemClick={onItemClick}
      />);

  expect(wrapper.state(`activeItem`)).toBe(undefined);

  wrapper.instance()._handleItemClick(`item`);
  expect(wrapper.state(`activeItem`)).toBe(`item`);
});
