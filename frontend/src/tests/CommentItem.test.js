import React from 'react';
import { Comment, Form, Icon, Popup } from 'semantic-ui-react'
import ConnectedApp, {CommentItem} from '../components/CommentItem';

import {shallow, mount } from 'enzyme'


function setup() {
    const props = {
        id: '894tuq4ut84ut8v4t8wun89g',
        timestamp: 1468166872634,
        body: 'Hi there! I am a COMMENT.',
        author: 'thingtwo', 
        voteScore: 6,
        voteOnCommentThunk: jest.fn(),
        editCommentThunk: jest.fn(),
        deleteCommentThunk: jest.fn(),
    }
  
    const enzymeWrapper = shallow(<CommentItem {...props} />)
  
    return {
      props,
      enzymeWrapper
    }
  }


describe('[Component] CommentItem', () => {
    const { enzymeWrapper } = setup()
    //testing just the component, without Redux
    it('shallow renders correctly', () => {
        expect(enzymeWrapper);
    });

    it('should have one comment block per item', () => {
        const {enzymeWrapper} = setup();
        const commentBlock = enzymeWrapper.find('Comment');
        expect(commentBlock.length).toBe(1);
    });

    it('should have a vote up option', () => {
        const {enzymeWrapper} = setup();
        const wrapper = enzymeWrapper.find('Icon').at(0).hasClass('commentVoteUp');
        expect(wrapper).toBe(true);
    });

    it('should have a vote down option', () => {
        const {enzymeWrapper} = setup();
        const wrapper = enzymeWrapper.find('Icon').at(1).hasClass('commentVoteDown');
        expect(wrapper).toBe(true);
    });

    it('should have call voteOnCommentThunk', () => {
        const {enzymeWrapper, props} = setup();
        const wrapper = enzymeWrapper.find('Icon').at(0) //.hasClass('commentVoteUp');
        wrapper.simulate('click')
        expect(props.voteOnCommentThunk).toBeCalled()
    });

    



});