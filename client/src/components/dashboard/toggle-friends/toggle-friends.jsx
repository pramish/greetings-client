import React, { useState, useEffect } from "react";
import { showFriendsQuery } from "../../../graphql/friends";
export const ShowAllFriends = (props) => {
  const [loading, setLoading] = useState(true);
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);
  const [myFriends, setMyFriends] = useState([]);
  useEffect(() => {
    setLoading(!loading);
    const hello = () => {
      const getFriends = {
        query: `{
            myFriends{
              name
              _id
              email
              date_of_birth
              phone_number
            }
          }`,
      };
      fetch("http://localhost:5000/graphql", {
        // fetch("https://usergreetings.herokuapp.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("Token"),
        },
        body: JSON.stringify(getFriends),
      })
        .then((res) => res.json())
        .then((data) => {
          const { myFriends } = data.data;
          console.log("showAddFriendForm", showAddFriendForm);
          console.log("showAddFriendForm", myFriends);
          setMyFriends(myFriends);
          setLoading(!loading);
        });
    };
    if (showAddFriendForm) {
      hello();
    }
  }, [showAddFriendForm]);
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
          <div key={eachFriend._id}>
            <p>Name: {eachFriend.name}</p>
            <p>Email: {eachFriend.email}</p>
            <p>Phone Number: {eachFriend.phone_number}</p>
            <p>
              Date Of Birth:{" "}
              {new Date(eachFriend.date_of_birth / 1000).toLocaleString(
                "en-GB",
                {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}
            </p>
          </div>
        ))}
    </>
  );
};
