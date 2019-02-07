import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import Welcome from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <Welcome />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
