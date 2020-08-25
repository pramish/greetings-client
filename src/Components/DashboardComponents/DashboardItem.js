import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AddFriendsForm } from './AddFriendsForm/AddFriendsForm';
import { SwitchFriendsComponent } from './ToggleFriends/SwitchFriendsComponent';
import '../../App.css';
export const DashboardItem = (props) => {
  const [myFriends, setMyFriends] = useState([]);
  const [addFriend, setAddFriend] = useState();
  const [getFriend, setGetFriend] = useState();

  const addFriends = (value) => {
    setAddFriend(value);
    console.log(value);
  };
  const getFriends = (value) => {
    setGetFriend(value);
    console.log(value);
  };
  useEffect(() => {
    const Token = localStorage.getItem('Token');
    const getFriendsData = {
      query: `
						{
							myFriends{
							name
							email
							date_of_birth
							phone_number
									}
				 }`,
    };
    fetch('https://usergreetings.herokuapp.com/graphql', {
      method: 'POST',
      body: JSON.stringify(getFriendsData),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + Token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMyFriends(data.data.myFriends);
      });
  });

  const friends = myFriends.map((eachFriends) => (
    <div className='row'>
      <div className='col s12 m6'>
        <div className=' card-content card blue-grey darken-1'>
          <div className=' white-text'>
            <span className='card-title'>{eachFriends.name}</span>
            <p>{eachFriends.email}</p>
            <p>{eachFriends.date_of_birth}</p>
            <p>{eachFriends.phone_number}</p>
          </div>
          <div className='card-action'>
            <Link to='/'>Edit</Link>
            <Link to='/'>Delete</Link>
          </div>
        </div>
      </div>
    </div>
  ));
  // const getFriends = () => {
  //   console.log('Hello haha', myFriends);
  // };
  return (
    <div className='friends-component'>
      <SwitchFriendsComponent
        handleAddFriend={addFriends}
        handleGetFriend={getFriends}
      />
      {/* {friends} */}
      {addFriend ? <AddFriendsForm /> : <></>}
      {getFriend ? friends : <></>}
    </div>
  );
};
