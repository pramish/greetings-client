import React, { createRef, useState } from "react";
import { Spinner } from "../../spinner/spinner";
export const AddFriendsForm = (props) => {
  const name = createRef();
  const email = createRef();
  const date = createRef();
  const phone_number = createRef();
  const [add, setAdd] = useState(false);
  const handleAddFriends = (e) => {
    e.preventDefault();
    setAdd(true);
    const Token = localStorage.getItem("Token");
    const addFriendData = {
      query: `
		mutation
				{	
			addFriends(friendsInput:{
			name:"${name.current.value}"
			email:"${email.current.value}"
			date_of_birth:"${date.current.value}"
			phone_number:"${phone_number.current.value}"
			})
			{
			name
			email
			}
				}`,
    };
    fetch("https://usergreetings.herokuapp.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + Token,
      },
      body: JSON.stringify(addFriendData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("What is the value of add???? ", add);
        setAdd(false);
      });
  };
  return (
    <div>
      <form onSubmit={handleAddFriends}>
        <div className="authform">
          <div className="input-field col s6 fields">
            <input
              id="email"
              type="text"
              className="validate"
              required
              ref={email}
            />
            <label htmlFor="email">Email Address</label>
          </div>
        </div>
        <div className="authform">
          <div className="input-field col s6 fields">
            <input
              id="name"
              type="text"
              className="validate"
              required
              ref={name}
            />
            <label htmlFor="name">Name</label>
          </div>
        </div>
        <div className="authform">
          <div className="input-field col s6 fields">
            <input
              type="date"
              id="date"
              className="validate"
              ref={date}
              required
            />
            <label htmlFor="date">Date of Birth</label>
          </div>
        </div>
        <div className="authform">
          <div className="input-field col s6 fields">
            <input
              type="text"
              id="phone_number"
              className="validate"
              ref={phone_number}
              required
            />
            <label htmlFor="phone_number">Phone Number</label>
          </div>
        </div>
        {add ? (
          <Spinner />
        ) : (
          <div className="submitbtn">
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Add Friend
            </button>
          </div>
        )}
      </form>
    </div>
  );
};
