import * as React from 'react';
import {mount, configure} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import withFormHandlers from "./with-form-handlers";

configure({
  adapter: new Adapter()
});

const id = 1;
const noop = () => {
  // Mock function for test props
};

const evtMockRating = {
  target: {
    value: `2`,
  }
};

const evtMockComment = {
  target: {
    value: `comment`,
  }
};

const mockComponent = () => {
  return (
    <div

    ></div>
  );
};

const MockComponentWrapped = withFormHandlers(mockComponent);

it(`withFormHandlers updates comment correctly`, () => {

  const wrapper = mount(
      <MockComponentWrapped
        id={id}
        onFormSubmit={noop}
      />
  );

  wrapper.instance().handleCommentChange(evtMockComment);
  expect(wrapper.state().comment).toEqual(`comment`);
});

it(`withFormHandlers updates rating correctly`, () => {
  const wrapper = mount(
      <MockComponentWrapped
        id={id}
        onFormSubmit={noop}
      />
  );

  wrapper.instance().handleRatingChange(evtMockRating);
  expect(wrapper.state().rating).toEqual(`2`);
});
