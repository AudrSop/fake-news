import React from 'react';
import { mount, shallow } from 'enzyme';
import PostDetails from '../PostDetails';
import {api} from '../../../services';

describe('PostDetails', () => {

  beforeEach(() => {
     api.Posts.findOne = jest.fn().mockReturnValue({
      title: 'Test title',
      body: 'News',
    });
  });

  it('should behave...', async () => {
    const wrapper = await shallow(<PostDetails match={{ params: {id: 1}}} />);
    
    expect(api.Posts.findOne).toHaveBeenCalled();
    expect(wrapper.find('.PostDetails-title').first().text()).toEqual('Test title');
  });
  
});