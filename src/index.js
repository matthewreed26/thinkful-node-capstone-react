import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AcronymFinder from './components/acronym-finder';
import store from './store';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <AcronymFinder />
  </Provider>,
  document.getElementById('root')
);
