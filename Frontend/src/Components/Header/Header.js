import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className='navbar-fixed'>
      <nav>
        <div className='nav-wrapper menu'>
          <Link to='/'>
            Greetings
            {/* <h1>Greetings</h1> */}
          </Link>
        </div>
      </nav>
    </div>
  );
};
