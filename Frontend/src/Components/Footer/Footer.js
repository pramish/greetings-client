import React from 'react';
export const Footer = () => {
  return (
    <footer className='page-footer menu'>
      <div className='footer-copyright'>
        <div className='container'>
          &copy; Pramish Luitel {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};
