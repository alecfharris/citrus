import React from 'react';
import ReactDOM from 'react-dom';
import WelcomeView from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WelcomeView />, div);
  ReactDOM.unmountComponentAtNode(div);
});
