import React from "react";
import { NavBar } from "../common/navbar";
import { Footer } from "../footer/footer";
import { DashboardItem } from "../dashboard/dashboard-item";
import { logout } from "../../utils/handlle_auth";

const DashBoard = (props) => {
  const handleLogout = () => {
    logout();
    props.history.push("/");
  };
  return (
    <div>
      <NavBar />
      <h1>My Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
      <DashboardItem />
      <Footer />
    </div>
  );
};
export default DashBoard;
