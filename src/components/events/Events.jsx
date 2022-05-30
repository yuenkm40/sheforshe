import React from 'react'
import './events.scss'
import EventPic from '../assets/women.png'
import Connect from '../assets/connect.jpg'
export default function Events() {
  return (
    <div className="events" id="events">
    <div className="top-banner">
    <img src={EventPic} alt=""></img>
    <h1>Attend life changing events. Buy tickets.</h1>
    </div>

    <div className="bottom">
    <h1>Upcoming Events</h1>
    <div className="eventList">
    <img src={Connect} alt=""></img>
    <img src={Connect} alt=""></img>
    <img src={Connect} alt=""></img>
    <img src={Connect} alt=""></img>
    </div>
    </div>
    </div>
  )
}
