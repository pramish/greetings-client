import React from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { DashboardItem } from '../DashboardComponents/DashboardItem';

const DashBoard = (props) => {
  return (
    <div>
      <Header />
      <h1>Dashboard</h1>
      <DashboardItem />
      <Footer />
    </div>
  );
};
export default DashBoard;
