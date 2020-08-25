import React from 'react';
import './Footer.css';
export const Footer = () => {
  return (
    <footer className='page-footer menu container1'>
      <div className='footer-copyright container '>
        &copy; Pramish Luitel {new Date().getFullYear()}
      </div>
    </footer>
  );
};
