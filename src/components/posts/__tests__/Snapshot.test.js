import React from 'react';
// import renderer from 'react-test-renderer';
import Post from '../Post';
import { MirrorRouter } from 'react-router-dom';
import { mount, shallow } from 'enzyme';

it('renders correctly', () => {
  const post = {id: 1, title: 'One', body: 'Text'};

  const wrapper = shallow(<Post post={post}></Post>);
  expect(wrapper).toMatchSnapshot();
});