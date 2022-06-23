import EventForm from './EventForm'
import './createEvent.scss'
import Empowerment from '../../assets/mentor.jpg';

export default function CreateEvent() {

  return (
    <div className="admin">
      <div className="left">
      <img src={Empowerment} alt=""></img>
      
      </div>
      <div className="right">
      <EventForm/>
      </div>
    </div>
  )
}

