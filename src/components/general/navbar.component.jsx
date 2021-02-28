import React, { Fragment } from "react";
import icon from "./../../assets/img/icon.png";
import "./navbar.style.css";
import { Link } from "react-router-dom";
export default function NavbarV({ onSetSidebarOpen, balance }) {
  return (
    <Fragment>
      {/* Navbar Top Start Here */}
      <nav className='navbar navbar-light bg-greener text-white'>
        <i
          className='fa fa-bars'
          style={{ fontSize: "30px" }}
          onClick={() => onSetSidebarOpen(true)}></i>
        <Link className='navbar-brand text-black d-flex' to='/'>
          <h2 className='m-2 fw-bold brand-name-ress'>EXAM BEEP</h2>
          <img
            src={icon}
            width='64'
            height='64'
            className='d-inline-block align-top'
            alt='Exam Beep App Icon'
            style={{ borderRadius: "50%" }}
          />
        </Link>
      </nav>
      {/* Navbar Top Ends Here */}
    </Fragment>
  );
}
