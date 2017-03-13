import React from 'react';
import ReactDOM from 'react-dom';
import SocialButton from './SocialButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SocialButton href="#" faClass="test"/>, div);
});
