import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import '@stripe/stripe-js'

import Navbar from "./components/navbar/Navbar"
import Intro from "./components/intro/Intro"
import About from "./components/about/About"
import Footer from "./components/intro/Footer"
import PartnersHome from "./components/partners/PartnersHome"
import PartnerDetails from "./components/partners/partnerDetails/PartnerDetails"
import Events from './components/events/Events'
import EventDetails from './components/events/eventDetails/EventDetails'
import Login from "./components/registration/Login"
import Profile from "./components/profile/Profile"
import Admin from "./components/partners/form/Admin"
import Messages from "./components/messages/Messages"
import About1 from "./components/intro/About1"

import StripeSucess from './components/events/eventDetails/StripeSucess'
import StripeCancel from './components/events/eventDetails/StripeCancel'

import './app.scss'


//Routing paths
const routes = (
  <Routes>
    <Route path="/" element={
      <div className="sections">
        <Intro/>
        <About/>
        <About1/>
        <Footer/>
    </div>
    } exact/>
    <Route path="/partners" element={<PartnersHome/>} exact/>
    <Route path="/partners/search" element={<PartnersHome/>} exact/>
    <Route path="/partners/:id" element={<PartnerDetails/>} exact/>
    <Route path="/events" element={<Events/>} exact/>
    <Route path="/events/:id" element={<EventDetails/>} exact/>
    <Route path="/profile" element={<Profile/>} exact/>
    <Route path="/login" element={<Login/>} exact/>
    <Route path="/admin" element={<Admin/>} exact/>
    <Route path="/messages" element={<Messages/>} exact/>
    <Route path="/success" element={<StripeSucess/>} exact/>
    <Route path="/cancel" element={<StripeCancel/>} exact/>
    <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
  </Routes>
)


function App() {
  return (
    <div className="app">
      {/* NavLinks must be within Router */}
    <Router>
    <Navbar/>
      <main>{routes}</main>
    </Router>
    </div>
  );
}

export default App;
