import React from "react";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineSearch, AiFillHome } from "react-icons/ai";
import { MdSportsCricket } from "react-icons/md";
import { RiMovieLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <section className="widgets">
      <p className="widgets-icon">
        <Link to="/" className="widgets-link">
          <span className="widget-icon-name">Home</span> <AiFillHome />
        </Link>
      </p>
      <p className="widgets-icon">
        <span className="widget-icon-name">Search</span> <AiOutlineSearch />
      </p>
      <p className="widgets-icon">
        <span className="widget-icon-name">Space</span> <VscAccount />
      </p>
      <p className="widgets-icon">
        <span className="widget-icon-name"> Sports</span>
        <MdSportsCricket />
      </p>
      <p className="widgets-icon">
        <span className="widget-icon-name">Movies</span> <RiMovieLine />
      </p>
    </section>
  );
}

export default Navbar;
