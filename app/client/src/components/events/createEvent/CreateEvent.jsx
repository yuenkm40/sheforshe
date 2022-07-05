import EventForm from './EventForm'
import './createEvent.scss'
import Event from '../../assets/connect.jpg';

export default function CreateEvent() {

  return (
    <div className="admin">
      <div className="left">
      <h1>Share inspiring stories with hundreds of other women entrepreneurs.</h1>
      <img src={Event} alt=""></img>
      
      </div>
      <div className="right">
      <EventForm/>
      </div>
    </div>
  )
}

