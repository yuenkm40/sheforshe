import React, {useCallback, useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom';
import './events.scss'

import Banner from '../assets/banner.png'
import Map from '../map/Map'
import EventSearch from './EventSearch';
import EventCard from './EventsCard';

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
        setSearchResult(responseData);
        setInitialData(responseData);
      }catch(error){
        console.log(error.message);
      }
    }
    sendRequest();
  },[])

  const filteredMapData = useCallback((index) => {
    setSearchResult(index);
  });


  return (
    <div className="events" id="events">
   
    <div className="top-banner">
      <div className="banner">
      <img src={Banner} alt=""></img>
        <div className="inner-banner">
          <h1>Attend life changing events.</h1>
          <button> <NavLink to="/admin">
                  Create your event!
              </NavLink></button>
        </div>
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
          {console.log(searchResult)}
          {/* Renders the list of events */}
          <ul className="event-list">
            {searchResult?.map(event => (
              <EventCard event={event} />
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
