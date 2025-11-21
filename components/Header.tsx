import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="pt-8 px-4 md:px-8 max-w-7xl mx-auto w-full flex items-center relative z-20">
      <div className="flex items-center gap-4 group relative">
        
        {/* Glow Effect behind Logo - Increased size */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-20 h-20 bg-gold-500/30 blur-[30px] rounded-full -z-10"></div>

        {/* Logo Image - Google Drive Link - Increased Size */}
        <img 
          src="https://lh3.googleusercontent.com/d/1tBK3MiHaCLvCTL6LuI56pZKg_rv6QPvg" 
          alt="Lotus Logo" 
          className="w-16 h-16 md:w-24 md:h-24 object-contain drop-shadow-[0_0_15px_rgba(245,158,11,0.4)]"
        />
        
        <div className="flex flex-col justify-center">
          <span className="text-white font-bold text-xl md:text-2xl leading-tight">Lotus</span>
          <span className="text-gray-500 text-[10px] md:text-xs uppercase tracking-wide">Assessoria de Performance</span>
        </div>
      </div>
    </header>
  );
};

export default Header;