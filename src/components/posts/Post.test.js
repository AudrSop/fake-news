import React from 'react';
import { MemoryRouter } from "react-router-dom";
import { shallow } from 'enzyme';
import Post from './Post';

it('renders without crashing', () => {
  const wrapper = shallow(
    <Post post={{ title: 'Trump', body: 'Build a wall' }} />
  );
  expect(wrapper.find('.Post-title').text()).toContain('Trump');
  expect(wrapper.find('.Post-body').text()).toContain('Build a wall');
});