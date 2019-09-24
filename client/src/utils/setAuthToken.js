import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    // if a token exists, included it in all axios requests
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    // if no token, remove it from default request
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
