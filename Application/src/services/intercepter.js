import axios from 'axios';
import store from '../store';
import { showLoading } from '../actions/appactions';

// Add a request interceptor
axios.interceptors.request.use(function (config) {  
    store.dispatch(showLoading(true));
    return config;
  }, function (error) {  
    store.dispatch(showLoading(false));
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  store.dispatch(showLoading(false));
  return response;
}, function (error) {
  store.dispatch(showLoading(false));
  return Promise.reject(error);
});