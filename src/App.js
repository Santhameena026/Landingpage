//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Aboutus from './Aboutus';
import Reviews from './Reviews';
import Collections from './Collections';
import Contact from './Contact';
import Header from './Header';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="about" element={<Aboutus/>}/>
         <Route path="collection" element={<Collections/>}/>    
         <Route path="review" element={<Reviews/>}/>
         <Route path="contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
