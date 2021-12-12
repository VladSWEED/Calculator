import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './containers/Calculator';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {rootReducer} from './stores/reducer/rootReducer';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <Calculator />
  </Provider>
  , document.getElementById("root")
);
