import React, { useState, useEffect } from "react";
import "./toggle-friends.css";
import Client from "../../../graphql/api";
import { showFriendsQuery, deleteFriendQuery } from "../../../graphql/friends";
export const ShowAllFriends = () => {
  const [loading, setLoading] = useState(true);
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);
  const [myFriends, setMyFriends] = useState([]);
  useEffect(() => {
    setLoading(!loading);
    const hello = async () => {
      const allFriends = await Client.request(showFriendsQuery);
      setMyFriends(allFriends.myFriends);
      setLoading(!loading);
    };
    if (showAddFriendForm) {
      hello();
    }
  }, [myFriends, showAddFriendForm]);

  const deleteFriend = async (friendId) => {
    await Client.request(deleteFriendQuery, { friendId });
  };
  return (
    <>
      <h3>My Friends</h3>
      <button
        className="btn waves-effect waves-light"
        onClick={() => setShowAddFriendForm(!showAddFriendForm)}
      >
        {!showAddFriendForm ? "Show" : "Hide"} Add Friends{" "}
      </button>
      {showAddFriendForm &&
        myFriends.map((eachFriend) => (
          <div className="friendsContainer" key={eachFriend._id}>
            <p>Name: {eachFriend.name}</p>
            <p>Email: {eachFriend.email}</p>
            <p>Phone Number: {eachFriend.phone_number}</p>
            <p>
              Date Of Birth:{" "}
              {new Date(+eachFriend.date_of_birth).toLocaleString("en-GB", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <button className="waves-effect waves-light btn">Edit</button>
            <button
              onClick={() => deleteFriend(eachFriend._id)}
              className="waves-effect waves-teal btn-flat"
            >
              Delete
            </button>
          </div>
        ))}
    </>
  );
};
