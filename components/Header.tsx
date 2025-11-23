import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="pt-8 px-4 md:px-8 max-w-7xl mx-auto w-full flex items-center">
      <div className="flex items-center gap-4 relative">
        {/* Glow behind logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gold-500/20 blur-[40px] rounded-full -z-10"></div>
        
        <img 
          src="https://lh3.googleusercontent.com/d/1KxqNCTyqWUVFwXNjmstdzeRa74ukr4QI" 
          alt="Lotus Logo" 
          className="w-28 md:w-36 h-auto object-contain drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]"
          referrerPolicy="no-referrer"
        />
        
        <div className="flex flex-col justify-center h-full pt-1">
          <span className="text-gray-500 text-[10px] md:text-xs uppercase tracking-wide border-l border-gray-700 pl-4 ml-2 h-fit">
            Assessoria de Performance
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;