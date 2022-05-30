import React from 'react'
import './login.scss'
import pic from "../assets/login.png"
export default function Login() {
  return (
    <div className="login">
      <div className="left">
      <h1>Welcome to SheforShe. Start your journey here.</h1>
          <img src ={pic} alt=""></img>
      </div>
      <div className="right"></div>
    </div>
  )
}
