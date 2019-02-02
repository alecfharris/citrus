import React from 'react';
import ReactDOM from 'react-dom';
import FridgeList from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FridgeList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
