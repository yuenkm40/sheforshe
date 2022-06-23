import React from 'react'
import './Stripe.scss'
import StripeImage from '../../assets/StripeCancel.png';
export default function StripeCancel() {
  return (
    <div className="stripe">
        <img src={StripeImage} alt=""/>
       <h1>Cancel</h1>
      <h2>Your payment was cancelled.</h2>
    </div>
  )
}
