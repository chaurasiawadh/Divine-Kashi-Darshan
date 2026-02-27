import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Packages from './pages/Packages';
import Destinations from './pages/Destinations';
import Services from './pages/Services';
import About from './pages/About';
import ExitPopup from './components/ExitPopup';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  return (
    <HelmetProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <ExitPopup />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/destinations" element={<Destinations />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}
