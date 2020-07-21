import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withActivePlayer from './with-active-player';
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


it(`withActiveVideo should start playing video after timer onMouseEnter`, () => {
  const MockComponentWrapped = withActivePlayer(MockComponent);
  const wrapper = mount(
      <MockComponentWrapped
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
      />);

  jest.useFakeTimers();

  wrapper.simulate(`mouseEnter`);

  expect(wrapper.state(`isPlaying`)).toBe(false);
  expect(setTimeout).toHaveBeenCalledTimes(1);

  jest.runAllTimers();

  expect(wrapper.state(`isPlaying`)).toBe(true);
});

it(`withActiveVideo should clear timer onMouseLeave`, () => {
  const MockComponentWrapped = withActivePlayer(MockComponent);
  const wrapper = mount(
      <MockComponentWrapped
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
      />);

  jest.useFakeTimers();

  wrapper.simulate(`mouseEnter`);
  wrapper.simulate(`mouseLeave`);

  expect(clearTimeout).toHaveBeenCalledTimes(1);
});

it(`withActiveVideo should clear timer on componentWillUnmount`, () => {
  const MockComponentWrapped = withActivePlayer(MockComponent);
  const wrapper = mount(
      <MockComponentWrapped
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
      />);

  jest.useFakeTimers();

  wrapper.instance().componentWillUnmount();

  expect(clearTimeout).toHaveBeenCalledTimes(1);
});
