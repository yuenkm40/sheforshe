import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'

import Navbar from "./components/navbar/Navbar"
import Intro from "./components/intro/Intro"
import About from "./components/about/About"
import Footer from "./components/intro/Footer"
import PartnersHome from "./components/partners/PartnersHome"
import Events from './components/events/Events'
import Login from "./components/registration/Login"
import Profile from "./components/profile/Profile"
import Form from "./components/partners/form/Form"
import './app.scss'


//Routing paths
const routes = (
  <Routes>
    <Route path="/" element={
      <div className="sections">
        <Intro/>
        <About/>
        <Footer/>
    </div>
    } exact/>
    <Route path="/partners" element={<PartnersHome/>} exact/>
    <Route path="/events" element={<Events/>} exact/>
    <Route path="/profile" element={<Profile/>} exact/>
    <Route path="/login" element={<Login/>} exact/>
    <Route path="/admin" element={<Form/>} exact/>
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
