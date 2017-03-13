import React from 'react';
import ReactDOM from 'react-dom';
import TypeWriter from './TypeWriter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TypeWriter />, div);
});
