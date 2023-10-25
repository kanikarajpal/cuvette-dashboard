import React from "react";
import "./NavbarStyle.css";

const Navbar = () => {
  return (
    <div className="containerDiv">
      <img src="/assets/logo.svg" alt="logo" className="img" />
      <div className="lowerDiv">
        <img src="/assets/profile.jpg" alt="profile" className="imageDiv" />
        <p>Siddharth Jain</p>
      </div>
    </div>
  );
};

export default Navbar;
