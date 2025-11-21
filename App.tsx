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
      
      {/* Floating WhatsApp Button - Visible on ALL devices now */}
      <a 
        href="https://wa.me/5547991005930" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-[999] w-14 h-14 md:w-16 md:h-16 bg-green-600 hover:bg-green-500 rounded-full shadow-lg shadow-green-900/30 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-green-500/50"
        aria-label="Fale conosco no WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </a>
    </div>
  );
};

export default App;