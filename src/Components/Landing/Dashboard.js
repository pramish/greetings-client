import React from 'react';
import { logout } from '../../utils';

const DashBoard = (props) => {
  const handleLogout = () => {
    logout();
    props.history.push('/');
  };
  return (
    <div>
      <h1>My Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
export default DashBoard;
