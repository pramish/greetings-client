import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <h1>I am a Home Page</h1>
      <Link to='/accounts'>
        <button>Click here to Access your acount</button>
      </Link>
    </div>
  );
};
