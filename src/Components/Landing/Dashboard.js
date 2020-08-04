import React from 'react';
import { logout } from '../../utils';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { DashboardItem } from '../DashboardComponents/DashboardItem';

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
      <DashboardItem />
      <Footer />
    </div>
  );
};
export default DashBoard;
