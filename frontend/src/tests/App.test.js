import React from 'react';
import App from '../components/App';
import {shallow, mount } from 'enzyme'



describe('[Component] App', () => {
  it('shallow renders correctly', () => {
      expect(shallow(<App />));
  });

});
