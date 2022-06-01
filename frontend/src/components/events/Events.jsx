import React from 'react'
import './events.scss'

import Connect from '../assets/connect.jpg'
import Banner from '../assets/banner.png'
export default function Events() {
  return (
    <div className="events" id="events">
   
    <div className="top-banner">
      <div className="banner">
      <img src={Banner} alt=""></img>
        <h1>Attend life changing events. Buy tickets.</h1>
      </div>
    </div>

    <div className="bottom">
     
      <div className="eventList">
        <h1>Upcoming Events</h1>  

        <div className="event">
          <img src={Connect} alt=""></img>
          <div className="text">
          <h2>TUE, JUN 10 2022, 10:00 AM </h2>
            <h1>Women Startup Roundtable</h1>
            <h3>Join us for a real talk on what it is like being a founder in Singapore, the importance of community and the topic of vulnerability.</h3>
            <button>Attend event</button>
          </div>
        </div>

        <div className="event">
          <img src={Connect} alt=""></img>
          <div className="text">
          <h2>TUE, JUN 10 2022, 10:00 AM </h2>
            <h1>Women Startup Roundtable</h1>
            <h3>Join us for a real talk on what it is like being a founder in Singapore, the importance of community and the topic of vulnerability.</h3>
            <button>Attend event</button>
          </div>
        </div>

        <div className="event">
          <img src={Connect} alt=""></img>
          <div className="text">
          <h2>TUE, JUN 10 2022, 10:00 AM </h2>
            <h1>Women Startup Roundtable</h1>
            <h3>Join us for a real talk on what it is like being a founder in Singapore, the importance of community and the topic of vulnerability.</h3>
            <button>Attend event</button>
          </div>
        </div>

 

      </div>

      <div className="map"></div>
    </div>

    </div>
  )
}
