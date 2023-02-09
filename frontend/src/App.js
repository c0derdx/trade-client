import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Billing from './components/Billing';
import BuyPage from './components/BuyPage';
import KnowMore from './components/childComponents/KnowMore';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="billing" element={<Billing />} />
        <Route path="profile" element={<Profile />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services/:id" element={<KnowMore />} />
        <Route path="services/:id/:id" element={<BuyPage />} />
        <Route path="billing/:id" element={<BuyPage />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
