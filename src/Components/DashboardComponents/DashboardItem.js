import React from 'react';
import { AddFriendsForm } from './AddFriendsForm/AddFriendsForm';
export const DashboardItem = (props) => {
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
              <a href='/'>Edit</a>
              <a href='/'>Delete</a>
            </div>
          </div>
        </div>
      </div>
      <AddFriendsForm />
    </div>
  );
};
