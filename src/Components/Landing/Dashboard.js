import React from 'react';
import { logout } from '../../utils';
import { Header } from '../Header/Header';

const DashBoard = (props) => {
  const handleLogout = () => {
    logout();
    props.history.push('/');
  };
  return (
    <div>
      <Header />
      <h1>My Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
export default DashBoard;
