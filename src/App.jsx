import Navbar from "./components/navbar/Navbar"
import Intro from "./components/intro/Intro"
import About from "./components/about/About"
import Footer from "./components/intro/Footer"
import './app.scss'
function App() {
  return (
    <div className="app">
    <Navbar/>
    <div className="sections">
      <Intro/>
      <About/>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
