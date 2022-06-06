import React, {useState, useEffect}from 'react'
import './navbar.scss'
import {NavLink, useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import decode from 'jwt-decode';
import {Person, Chat, Notifications } from "@material-ui/icons";

export default function Navbar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log(user);
  const logout= () => {
    dispatch({type:'LOGOUT'});
    navigate('/');
    setUser(null);
  }
  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    //JWT
    setUser(JSON.parse(localStorage.getItem('profile')));
  },[user, location]);
  return (
    <div className="navbar" id="navbar">
      <div className="wrapper">
        <div className="left">
            <h1>SheforShe</h1>
            {user?.result?(
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
                {/* <div className="menuItem">
                  <NavLink to="/admin">
                    Admin
                  </NavLink>
                </div> */}
            </div>
            ):("")}
        </div>
        <div className="right">
        {user?.result? (<> <div className="IconItem"> <NavLink to="/messages"> <Chat /> </NavLink> </div> 
        <div className="button" onClick={logout}>Log Out</div></>) : 
        (<div className="button">
            <NavLink to="/login">
                Login
            </NavLink>
            </div>)}
            
        </div>
        </div>
    </div>
  )
}
