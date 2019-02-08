import React from 'react';
import ReactDOM from 'react-dom';
import Browse from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Browse />, div);
  ReactDOM.unmountComponentAtNode(div);
});
