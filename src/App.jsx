import Navbar from "./components/navbar/Navbar"
import Intro from "./components/intro/Intro"
import About from "./components/about/About"
import './app.scss'
function App() {
  return (
    <div className="app">
    <Navbar/>
    <div className="sections">
      <Intro/>
      <About/>
    </div>
    </div>
  );
}

export default App;
