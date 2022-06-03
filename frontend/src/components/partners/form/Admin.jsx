
import Form from './Form'
import './admin.scss'
import Empowerment from '../../assets/mentor.jpg';

export default function Admin() {

  return (
    <div className="admin">
      <div className="left">
      <img src={Empowerment} alt=""></img>
      
      </div>
      <div className="right">
      <Form/>
      </div>
    </div>
  )
}
