import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className='navbar-fixed'>
      <nav>
        <div className='nav-wrapper menu'>
          <Link to='/'>
            <a href='https://usergreetings.netlify.app/' className='brand-logo'>
              Greetings
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
};
