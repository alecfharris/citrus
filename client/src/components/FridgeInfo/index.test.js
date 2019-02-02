import React from 'react';
import ReactDOM from 'react-dom';
import Fridgeinfo from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Fridgeinfo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
