import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import routes from './router';
import configureStore from './store/configureStore.js';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>
  , document.getElementById('app'));
