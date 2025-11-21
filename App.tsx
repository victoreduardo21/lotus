import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050507] text-gray-200 font-sans overflow-x-hidden selection:bg-gold-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default App;