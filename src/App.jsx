import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import Vehicles from './pages/Vehicles';
import Destinations from './pages/Destinations';
import HotelDetail from './pages/HotelDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col font-body selection:bg-primary-fixed selection:text-on-primary-fixed bg-surface text-on-surface">
          <Navbar />
          <main className="flex-grow flex flex-col pt-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/vehiculos" element={<Vehicles />} />
              <Route path="/destinos" element={<Destinations />} />
              <Route path="/hotel/:id" element={<HotelDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}
