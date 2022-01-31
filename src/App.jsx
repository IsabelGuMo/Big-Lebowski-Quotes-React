 
import './App.css';
import Navbar from   './core/components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Quotes from './pages/Quotes/Quotes';
import About from './pages/About/About';
import Footer from   './core/components/Footer/Footer';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
        <Navbar/>
         <main>
           <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/quotes" element={<Quotes />} />
           <Route path="/about" element={<About />} />
           </Routes>
         </main>
       <Footer/>
       </Router>
    </div>
  );
}

export default App;
