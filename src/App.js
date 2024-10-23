
import './App.css';
import { NavBar } from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from './components/Banner';

import Features from './components/Features';


import Footer from './components/Footer';
import AboutUs from './components/AboutUs';

function App() {

  
  return (
    <div className="App">
      <NavBar  />
      <Banner />
      
      <hr/>
      <Features />
      <hr/>
      <AboutUs />
      <hr/>
      <Footer />
    </div>
  );
}

export default App;
