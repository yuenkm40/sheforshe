import React from 'react'
import './intro.scss'
import Woman from '../assets/woman.png'

export default function Intro() {
  return (
    <div className="intro">
      <div className="left">
        <h1>SheforShe is a learning community for female entrepreneurs.</h1>
        <h2>We connect a global professional network of aspiring female entrepreneurs who are seeking knowledge and ecosystem support to start their business. </h2>
      </div>
      <div className="right">
        <img src = {Woman} alt=""></img>
      </div>
    </div>
  )
}
