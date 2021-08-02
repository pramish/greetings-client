import React, { useState } from "react";
import "./dashboard.css";
import { AddFriendsForm } from "./add-friends/add-friends";
import { ShowAllFriends } from "./toggle-friends/toggle-friends";
export const DashboardItem = () => {
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);
  return (
    <div className="footer-container">
      <ShowAllFriends />
      <button
        className="btn waves-effect waves-light"
        onClick={() => setShowAddFriendForm(!showAddFriendForm)}
      >
        {!showAddFriendForm ? "Show" : "Hide"} Add Friends Form
      </button>
      {showAddFriendForm && <AddFriendsForm />}
    </div>
  );
};
