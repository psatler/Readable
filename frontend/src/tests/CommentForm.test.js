import React from 'react';
import { Comment, Form, Icon, Popup } from 'semantic-ui-react'
import ConnectedApp, {CommentForm} from '../components/CommentForm';

import {shallow} from 'enzyme'


function setup() {
    const props = {
        parentId: '894tuq4ut84ut8v4t8wun89g',
        addCommentThunk: jest.fn(),
    }
  
    const enzymeWrapper = shallow(<CommentForm {...props} />)
  
    return {
      props,
      enzymeWrapper
    }
  }

describe('[Component] CommentForm', () => {
    
    //testing just the component, without Redux

    it('shallow renders correctly', () => {
        const { enzymeWrapper } = setup()
        expect(enzymeWrapper);
    });


    it('should have one form block', () => {
        const {enzymeWrapper} = setup();
        const wrapper = enzymeWrapper.find('Form').length;
        expect(wrapper).toBe(1);
    });

    // it('should have one form text area', () => {
    //     const {enzymeWrapper} = setup();
    //     const wrapper = enzymeWrapper.find('TextArea').length;
    //     expect(wrapper).toBe(1);
    // });




});