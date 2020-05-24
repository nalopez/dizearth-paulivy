import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">Home</li>
        <li className="navbar-item">Menu</li>
        <li className="navbar-item">Contact</li>
      </ul>
      <style jsx>{`
        .navbar {
          width: 100%;
          background: #ffffff;
          margin: 0 auto;
          opacity: 0.6;
        }

        .navbar-list {
          list-style-type: none;
          display: flex;
          padding-left: 0;
          justify-content: space-between;
        }

        .navbar-item {
          width: 100px;
          padding: 10px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
