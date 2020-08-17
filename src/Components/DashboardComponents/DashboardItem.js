import React from 'react';
import { Link } from 'react-router-dom';
import { AddFriendsForm } from './AddFriendsForm/AddFriendsForm';
export const DashboardItem = (props) => {
  const getFriends = () => {
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
        console.log(data);
        // setLoading(false);
        // props.history.push('/dashboard');
      });
  };
  return (
    <div>
      <div className='row'>
        <div className='col s12 m6'>
          <div className='card blue-grey darken-1'>
            <div className='card-content white-text'>
              <span className='card-title'>Friends Name</span>
              <p>Date of Birth</p>
              <p>Mobile</p>
            </div>
            <div className='card-action'>
              <Link to='/'>Edit</Link>
              <Link to='/'>Delete</Link>
              <Link onClick={getFriends} to='/dashboard'>
                Get Friends
              </Link>
            </div>
          </div>
        </div>
      </div>
      <AddFriendsForm />
    </div>
  );
};
