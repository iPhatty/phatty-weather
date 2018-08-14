import React from 'react';
import ReactDOM from 'react-dom';

//css
import './styling/index.css';

import App from './components/App';
import Root from './Root';

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.querySelector('#root')
);
