import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../utils';
export const PublicPage = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() && restricted ? (
          <Redirect to='/dashboard' />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
