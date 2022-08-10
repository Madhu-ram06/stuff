//import AboutUs from './AboutUs';
import Navbar from './Navbar';
import Home from './Home';
import ListOfHotels from './ListOfHotels';
import ResortVariants from './ResortVariants';
import './App.css';
import {BrowserRouter as Router,Route,Routes,Navigate} from 'react-router-dom';
import AboutUs from './AboutUs';


function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
    <Routes basename='/home'>
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path="/home" element={<Home />} />
    <Route path='/about' element={<AboutUs/>}/>
    <Route path='/listofhotels' element={<ListOfHotels/>} />
    <Route path='/resortvariants' element={<ResortVariants/>} />
    
      
    </Routes>
    </div>
    </Router>
  );
}

export default App;
