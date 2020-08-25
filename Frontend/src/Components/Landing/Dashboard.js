import React from 'react';
import { Header } from '../Header/Header';
// import { Footer } from '../Footer/Footer';
import { DashboardItem } from '../DashboardComponents/DashboardItem';
import '../../App.css';

const DashBoard = (props) => {
  return (
    <div>
      <Header />
      <div className='dashboard'>
        <div>
          <h3>Dashboard</h3>
        </div>
        <DashboardItem />
        {/* <Footer /> */}
      </div>
    </div>
  );
};
export default DashBoard;
