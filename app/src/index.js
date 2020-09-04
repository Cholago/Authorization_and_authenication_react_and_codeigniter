import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Reducer from './reducers';

const store = createStore(Reducer, applyMiddleware(thunk));

/*
var obj3 = { c: 30 };
var new_obj = Object.assign({}, obj3, { a: 100, c: 200 });
console.log(new_obj);
*/

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
