export const login = () => {
  localStorage.setItem('Token_Key', 'My Custom Tokens');
};
export const logout = () => {
  localStorage.removeItem('Token_Key');
};
export const isLogin = () => {
  if (localStorage.getItem('Token_Key')) {
    return true;
  }
  return false;
};
