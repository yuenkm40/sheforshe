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
import Events from './components/events/Events'
import './app.scss'

//Routing paths
const routes = (
  <Routes>
    <Route path="/" element={
      <div className="sections">
        <Intro/>
        <About/>
    </div>
    } exact/>
    <Route path="/parners" element={<Intro/>} exact/>
    <Route path="/events" element={<Events/>} exact/>
    <Route path="/profile" element={<Intro/>} exact/>
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
