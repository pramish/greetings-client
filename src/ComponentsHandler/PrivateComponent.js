import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../utils';

export const PrivateComponent = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? <Component {...props} /> : <Redirect to='/accounts' />
      }
    />
  );
};
