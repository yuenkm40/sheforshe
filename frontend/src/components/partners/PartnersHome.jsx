import React, { useEffect } from 'react'
import './partnershome.scss'
import Partners from './Partners';
import EventPic from '../assets/women.png'
import { useDispatch } from 'react-redux';
import { getPartners } from '../../actions/partners';
import {NavLink} from 'react-router-dom';
export default function PartnersHome() {
  
    
  return (
    <div className="partnershome">

      <div className="top-banner">
        <img src={EventPic} alt=""></img>
        <div className="text">
        <h1>Whether you are finding a fellow startup founder or mentor, look no further.</h1>
        <button> <NavLink to="/admin">
                Be a mentor
            </NavLink></button>
        </div>
      </div>

      <div className="bottom">
      <Partners/>
      </div>
    
    </div>
  )
}
