import axios from 'axios';
import Cookies from 'universal-cookie';
// utilities
import $ from 'jquery';
import { loaderAnimation } from '../helpers/ui';

const cookies = new Cookies();
const requestHttp = [];

const loader = (url) => {
  requestHttp.splice(url, 1);
  if (!requestHttp.length) {
    $('#loader').removeClass('active');
  }
};

// Add a request interceptor
axios.interceptors.request.use((config) => {
  // Do something before request is sent
  $('#loader').addClass('active');
  loaderAnimation();
  requestHttp.push(config.url);
  return config;
}, (error) => {
  $('#loader').removeClass('active');
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use((response) => {
  loader(response.config.url);
  // Do something with response data
  return response;
}, (error) => {
  loader(error.response.config.url);
  if (error.response && (error.response.status === 401 || error.response.statusText === 'Unauthorized')) {
    cookies.remove('Session-Id', { path: '/' });
    // window.location.reload();
  }
  // Do something with response error
  return Promise.reject(error);
});


export default {
  genericHandler(options, sessionIdDisable) {
    // const service = options.url;
    const config = {
      method: options.method || 'GET',
      url: options.url,
      headers: {
        'Content-Type': options.headers ? options.headers['Content-Type'] : 'application/json',
      },
      data: options.data || null,
      responseType: options.responseType || 'json',
    };
    if (options.authorization) {
      config.headers.Authorization = options.authorization;
    }

    if (!sessionIdDisable) config.headers['Session-Id'] = cookies.get('Session-Id');
    return axios(config).then(response =>
      // console.log(`successful call :: ${options.method || 'GET'} '${service}'`, response.status, response.data);
      ({ error: null, data: response })).catch((error) => {
      if (error.response instanceof Error) {
        // Something happened in setting up the request that triggered an Error
        // console.error(`execution error :: ${options.method || 'GET'} '${service}'`, error.response.message, error.response);
        return { error: error.response, data: null };
      }
      // console.error(`generic error :: ${options.method || 'GET'} '${service}'`, error.response.message, error.response);
      return { error: error.response, data: null };
    });
  },
};

