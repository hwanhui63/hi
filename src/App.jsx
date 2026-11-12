import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Snowfall from './components/layout/Snowfall';
import Home from './pages/Home';
import Concert from './pages/Concert';
import Guestbook from './pages/Guestbook';
import Info from './pages/Info';
import Reviews from './pages/Reviews';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-train-bg text-train-ivory selection:bg-train-gold selection:text-train-bg overflow-x-hidden">
        {/* Vintage Grain Texture Overlay */}
        <div className="vintage-grain pointer-events-none fixed inset-0 z-30 opacity-40" />

        {/* Cinematic Winter Snowfall Canvas */}
        <Snowfall density={40} speed={0.9} />

        {/* Global Navigation */}
        <Navbar />

        {/* Main Content Router */}
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/concert" element={<Concert />} />
            <Route path="/guestbook" element={<Guestbook />} />
            <Route path="/info" element={<Info />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}
