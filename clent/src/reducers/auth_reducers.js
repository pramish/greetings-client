import { login, logout, isLogin } from '../utils/handlle_auth';

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const CHECK_LOGIN = 'CHECK_LOGIN';

export const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return login(action.auth.token);
    case LOGOUT:
      return logout();
    case CHECK_LOGIN:
      return isLogin();
    default:
      return state;
  }
};
