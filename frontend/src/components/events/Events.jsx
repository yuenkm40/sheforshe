import React, {useCallback, useEffect, useState} from 'react'
import './events.scss'

import Connect from '../assets/connect.jpg'
import Banner from '../assets/banner.png'
import Map from '../map/Map'
import EventSearch from './EventSearch';
import {LocationOn} from '@material-ui/icons';

export default function Events() {

  const [initialData, setInitialData] = useState([]);
  //To store the events
  const [searchResult, setSearchResult] = useState([]);

  //Load data
  useEffect(() => {
    const sendRequest = async () => {
      try{
        const response = await fetch('http://localhost:5000/events');
        const responseData = await response.json();
        setInitialData(responseData);
      }catch(error){
        console.log(error.message);
      }
    }
    sendRequest();
  },[initialData])

  const filteredMapData = useCallback((index) => {
    setSearchResult(index);
  });


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

        <div className="eventHeader">
          <h1>Events for you</h1>
        </div>

          <div className="filter">
            <EventSearch initialData={initialData} filterSearch={filteredMapData}/>
          </div>


          <h4>
            {`${searchResult?.length} Events`}
          </h4>

          {/* Renders the list of events */}
          <ul className="event-list">
            {searchResult?.map(event => (
              <div className="event">
                <img src={Connect} alt=""></img>
                <div className="text">
                <h2>{event.date}</h2>
                  <h1>{event.title}</h1>
                  <h3>{event.description}</h3>
                  {/* Address portion */}
                  <h6><LocationOn fontSize="small" style={{ color: 'red' }}/> {event.address}</h6>
                </div>
              </div>
            ))}
          </ul>

      </div>
      
      <div className="map">
        <Map>
          {searchResult}
        </Map>
      </div>
    </div>

    </div>
  )
}
