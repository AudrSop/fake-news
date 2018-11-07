import React from 'react';
import { mount, shallow } from 'enzyme';
import AddPost from '../AddPost';
import {api} from '../../../services';

describe('AddPost', () => {

  it('should render correct elements', () => {
    const handleAdd = jest.fn();
    const wrapper = shallow(<AddPost handleAdd={handleAdd} />);
    
    expect(wrapper.find('input').exists()).toBeTruthy();
    expect(wrapper.find('textarea').exists()).toBeTruthy();
    expect(wrapper.find('button').exists()).toBeTruthy();
    expect(wrapper.find('button').first().text()).toEqual('Post');
  });
  
  describe('when pressed Post', () => {


    it('should handle post action', () => {
      const handleAdd = jest.fn();
      const wrapper = shallow(<AddPost handleAdd={handleAdd} />);
      const button = wrapper.find('button');
      const input = wrapper.find('input');
      button.simulate('click');
  
      expect(handleAdd).toHaveBeenCalled();
    });

  });
  
});