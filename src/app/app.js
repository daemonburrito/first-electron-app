import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';


export const run = () => {
  ReactDOM.render(<App/>, document.querySelector('app'));
};
