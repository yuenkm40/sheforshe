import React from 'react'
import './message.scss'
import Lisa from '../assets/Lisa.jpg'
import {format} from 'timeago.js';
export default function Message({message,own}) {
  return (
    <div className={own?"message own":"message"}>
      <div className="messageTop">
          <img className="messageImg" src={Lisa} alt=""/>
          <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  )
}
