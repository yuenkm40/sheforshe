import React from 'react'
import Connect from '../assets/connect.jpg'
import {useNavigate} from 'react-router-dom';
import {LocationOn} from '@material-ui/icons';

import './eventscard.scss'

export default function EventsCard({event}) {
  const navigate = useNavigate();

  const openevent = () => {
    navigate(`/events/${event._id}`);
  };

  return (
    <div className="event" onClick={openevent}>
        <img src={Connect} alt=""></img>
        <div className="text">
        <h2>{event.date}</h2>
            <h1>{event.title}</h1>
            <h3>{event.description}</h3>
            {/* Address portion */}
            <h6><LocationOn fontSize="small" style={{ color: 'red' }}/> {event.address}</h6>
        </div>
    </div>
  );
}