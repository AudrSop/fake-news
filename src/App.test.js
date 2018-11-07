import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from "react-router-dom";

import App from './App';
import { api } from './services';


it('renders without crashing', () => {
  api.Posts.all = jest.fn().mockReturnValue([]);

  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><App /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
