import React, { useState, useEffect } from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";
// import { AddFriends } from "./add-friends/add-friends";
// import { ToggleFriends } from "./toggle-friends/toggle-friends";
export const DashboardItem = (props) => {
  useEffect(() => {
    const Token = localStorage.getItem("Token");
  });
  return (
    <div className="footer-container">
      <div className="friends-container">
        <button>View all My Friends</button>
        <button>Add Friends</button>
      </div>
    </div>
  );
};
