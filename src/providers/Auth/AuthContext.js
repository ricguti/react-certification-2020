import React from 'react';

const AuthContext = React.createContext({
  login: () => {},
  logout: () => {},
  authenticated: '',
});

export default AuthContext;
