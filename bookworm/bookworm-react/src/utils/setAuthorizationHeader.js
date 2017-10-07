import axios from 'axios';

export default (token = null) => {
  if (token) {
    console.log(token);
    axios.defaults.headers.common.authorization = `Bearer: ${token}`;
  } else {
    delete axios.defaults.common.authorization;
  }
};
