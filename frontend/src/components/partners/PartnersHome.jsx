import './partnershome.scss'
import Partners from './Partners';
import EventPic from '../assets/women.png'
export default function PartnersHome() {
  return (
    <div className="partnershome">

      <div className="top-banner">
        <img src={EventPic} alt=""></img>
        <h1>Whether you are finding a fellow startup founder or mentor, look no further.</h1>
      </div>

      <div className="bottom">
      <Partners/>
      </div>
    
    </div>
  )
}
