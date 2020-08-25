import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { isLogin, logout } from '../../utils/handlle_auth';

export const Header = () => {
  return (
    <div className='navbar-fixed'>
      <nav>
        <div className='nav-wrapper menu'>
          <div className='menu-item'>
            <Link to='/'>Greetings</Link>
            {isLogin() ? (
              <Link onClick={logout} className='item' to='/accounts'>
                Logout
              </Link>
            ) : (
              <Link className='item' to='/accounts'>
                Account
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
