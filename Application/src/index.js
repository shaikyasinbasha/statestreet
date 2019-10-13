import React from "react";
import ReactDOM from "react-dom";
import store from './store';
import { Provider } from 'react-redux';
import './style.less';
import App from "./App";
import { HashRouter, BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <Provider store={store}>    
    <HashRouter>
      <App />    
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
