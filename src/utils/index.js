/* eslint-disable consistent-return */
import jwtDecode from 'jwt-decode';

const isLoggedIn = () => {
  const token = localStorage.getItem('token');
  if (token) {
    const decodedToken = jwtDecode(token);

    const currentTime = Date.now() / 1000;

    if (decodedToken.exp < currentTime) {
      // Logout user
      return false;
    }
    return true;
  }

  return false;
};

const trimError = (error) => {
  if (!error) {
    return;
  }
  const response = error.replace('GraphQL error:', '').trim();
  return response;
};

export { isLoggedIn, trimError };
