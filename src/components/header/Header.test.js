import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header href="#" faClass="test"/>, div);
});
