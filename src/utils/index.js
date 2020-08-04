export const login = () => {
  localStorage.setItem('Token_Key', 'Token_Value');
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
