import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="pt-8 px-4 md:px-8 max-w-7xl mx-auto w-full flex items-center">
      <div className="flex items-center gap-2 relative">
        {/* Glow behind logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gold-500/20 blur-[30px] rounded-full -z-10"></div>
        
        <img 
          src="https://lh3.googleusercontent.com/d/1tBK3MiHaCLvCTL6LuI56pZKg_rv6QPvg" 
          alt="Lotus Logo" 
          className="w-32 md:w-40 h-auto object-contain drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        />
        
        <div className="flex flex-col justify-center h-full pt-1">
           {/* Logo image replaces the main text, keeping just the subtitle nicely aligned if needed, or removing it if the logo has text. 
               Assuming the logo contains the brand name, we keep the subtitle next to it or hide it. 
               Based on typical requests, usually we keep the subtitle or adjust spacing. Let's keep the subtitle aligned. */}
          <span className="text-gray-500 text-[10px] uppercase tracking-wide border-l border-gray-700 pl-3 ml-3 h-fit">
            Assessoria de Performance
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;