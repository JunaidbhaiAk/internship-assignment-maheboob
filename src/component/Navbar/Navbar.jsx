import React from "react";
import { HiUserCircle } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import { navItems } from "../../utils/constants";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="navTitle.png" alt="logo" />
      </div>
      <ul className="navbar__list">
        {navItems.map((ele,idx) => genrateListItem({ title: ele,idx }))}
      </ul>
    </nav>
  );
};

const genrateListItem = ({ title ,idx}) => {
  if (title === "ProfileName") {
    return (
      <li className="navbar__list__item active" key={idx}>
        <HiUserCircle size={20} style={{ marginRight: "6px" }} className='iconc'/>
        {title}
        <FiChevronDown size={20} style={{ marginLeft: "10px" }} />
      </li>
    );
  }
  return <li className="navbar__list__item" key={idx}>{title}</li>;
};

export default Navbar;
