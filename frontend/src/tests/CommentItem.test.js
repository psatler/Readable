import React from 'react';
import App from '../components/CommentItem';

import {shallow, mount } from 'enzyme'


describe('[Component] CommentItem', () => {
  xit('shallow renders correctly', () => {
      expect(shallow(<CommentItem />));
  });

});