import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withActivePlayer from './with-active-player.js';
import {func} from 'prop-types';

configure({
  adapter: new Adapter(),
});

const MockComponent = ({onMouseEnter, onMouseLeave}) => (
  <div
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
  </div>
);

MockComponent.propTypes = {
  onMouseEnter: func .isRequired,
  onMouseLeave: func.isRequired,
};

it(`withActiveVideo should start/end playing video onMouseEnter/onMouseLeave `, () => {
  const MockComponentWrapped = withActivePlayer(MockComponent);
  const onMouseEnter = jest.fn();
  const onMouseLeave = jest.fn();
  const wrapper = mount(
      <MockComponentWrapped
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />);

  expect(wrapper.state(`isPlaying`)).toBe(false);

  wrapper.simulate(`mouseEnter`);
  expect(wrapper.state(`isPlaying`)).toBe(true);

  wrapper.simulate(`mouseLeave`);
  expect(wrapper.state(`isPlaying`)).toBe(false);
});
