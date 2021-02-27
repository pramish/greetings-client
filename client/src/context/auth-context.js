import React, { createContext, useReducer } from 'react';
import { authReducer } from '../reducers/auth_reducers';
export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [auth, dispatch] = useReducer(authReducer, [], () => {
    const authToken = localStorage.getItem('Token');
    return authToken ? authToken : null;
  });
  return (
    <AuthContext.Provider value={{ auth, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};
