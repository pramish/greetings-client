export const login = (token) => {
  localStorage.setItem('Token', token);
};
export const logout = () => {
  localStorage.removeItem('Token');
};
export const isLogin = () => {
  if (localStorage.getItem('Token')) {
    return true;
  }
  return false;
};
