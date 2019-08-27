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

export { isLoggedIn };
