import React from 'react'
import './Stripe.scss'
import StripeImage from '../../assets/StripeSucess.png';
export default function StripeSucess() {
  return (
    <div className="stripe">
      <img src={StripeImage} alt=""/>
      <h1>Your Payment is Sucessful!</h1>
      <h2>Thank you for registering an event with SheforShe.</h2>
    </div>
  )
}
