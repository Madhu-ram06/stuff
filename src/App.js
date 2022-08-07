//import AboutUs from './AboutUs';
import Navbar from './Navbar';
import Home from './Home';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import AboutUs from './AboutUs';


function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      
      
    </Routes>
    </div>
    </Router>
  );
}

export default App;
