import React from 'react';
import renderer from 'react-test-renderer';
import Tabs from './tabs.jsx';

const tabs = [`Overview`, `Reviews`, `Details`];
const activeTab = tabs[0];

it(`Tabs should render correctly`, () => {
  const tree = renderer
    .create(
        <Tabs
          activeTab={activeTab}
          onTabClick={() => {}}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
