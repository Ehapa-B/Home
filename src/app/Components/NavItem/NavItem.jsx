import React from "react";
import "./NavItem.css";

const NavItem = ({ label, icon }) => {
  return (
    <div className="nav-item">
      <img src={icon} alt={label} className="nav-icon" />
      <span>{label}</span>
    </div>
  );
};

export default NavItem;
