import React from 'react'
import './navbar.scss'
import {NavLink} from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar" id="navbar">
      <div className="wrapper">
        <div className="left">
            <h1>SheforShe</h1>
   
            <div className="menu">
                <div className="menuItem">
                  <NavLink to="/">
                    Home
                  </NavLink>
                </div>
                <div className="menuItem">
                  <NavLink to="/partners">
                    Partners
                  </NavLink>
                </div>
                <div className="menuItem">
                  <NavLink to="/events">
                    Events
                  </NavLink>
                </div>
                <div className="menuItem">
                  <NavLink to="/profile">
                    Profile
                  </NavLink>
                </div>
            </div>
        </div>
        <div className="right">
            <div className="button">
                Login
            </div>
        </div>
        </div>
    </div>
  )
}
