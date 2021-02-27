import React from "react";
import "./footer.css";
export const Footer = () => {
  return (
    <footer className="menu">
      <div className="footer-copyright">
        <div className="container footer">
          &copy; Pramish Luitel {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};
