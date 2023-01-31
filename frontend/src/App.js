import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Billing from './components/Billing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="billing" element={<Billing />} />
        <Route path="contact" element={<Contact />} />

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
