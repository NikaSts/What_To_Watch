import * as React from 'react';
import {mount, configure} from 'enzyme';
import * as Adapter from "enzyme-adapter-react-16";
import withActiveItem from './with-active-item';
import {Page} from '../../utils/consts';

configure({
  adapter: new Adapter(),
});

interface MockComponentProps {
  currentPage: string;
  onItemClick: () => void;
}

const MockComponent = ({onItemClick}: MockComponentProps) => (
  <div>
    <a onClick={onItemClick}>item</a>
  </div>
);


it(`withActiveItem should change activeItem onClick`, () => {
  const MockComponentWrapped = withActiveItem(MockComponent);
  const onItemClick = jest.fn();
  const wrapper = mount(
      <MockComponentWrapped
        currentPage={Page.MAIN}
        activeItem={`a`}
        onItemClick={onItemClick}
      />);

  expect(wrapper.state(`activeItem`)).toBe(undefined);

  wrapper.instance().handleItemClick(`item`);
  expect(wrapper.state(`activeItem`)).toBe(`item`);
});
