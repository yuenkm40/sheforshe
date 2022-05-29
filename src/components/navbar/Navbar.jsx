import React from 'react'
import './navbar.scss'

export default function Navbar() {
  return (
    <div className="navbar" id="navbar">
      <div className="wrapper">
        <div className="left">
            <h1>SheforShe</h1>
   
            <div className="menu">
                <div className="menuItem">Home</div>
                <div className="menuItem">Partners</div>
                <div className="menuItem">Events</div>
                <div className="menuItem">Profile</div>
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
