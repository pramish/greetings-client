import React, { useState } from "react";

export const ToggleFriends = (props) => {
  const [addFriend, setAddFriend] = useState(true);
  const [getFriend, setGetFriend] = useState(true);
  const handleAddFriend = () => {
    setAddFriend(!addFriend);
    props.handleAddFriend(addFriend);
  };
  const handleGetFriend = () => {
    setGetFriend(!getFriend);
    props.handleGetFriend(getFriend);
  };
  return (
    <div>
      <button
        className="btn waves-effect waves-light"
        type="button"
        name="action"
        onClick={handleAddFriend}
      >
        {addFriend ? "Show Add Friend Form" : "Hide Add Friend Form"}
      </button>
      <button
        className="btn waves-effect waves-light"
        type="button"
        name="action"
        onClick={handleGetFriend}
        // disabled
      >
        {getFriend ? "Get Friends" : "Hide Friends"}
      </button>
    </div>
  );
};
