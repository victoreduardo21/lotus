import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'outline';
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className = '', variant = 'primary' }) => {
  const baseStyles = "uppercase text-xs tracking-[0.15em] font-bold py-4 px-10 transition-all duration-300 border select-none";
  
  // Primary: Dark background, slight border, text white
  const primaryStyles = "bg-[#161825] border-gray-700 text-white hover:border-gold-500 hover:text-gold-400 hover:bg-[#1f2233] shadow-lg shadow-black/30";
  
  const outlineStyles = "bg-transparent border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white";

  const styles = variant === 'primary' ? primaryStyles : outlineStyles;

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Updated contact number
      window.open('https://wa.me/5547991005930', '_blank');
    }
  };

  return (
    <button 
      onClick={handleClick}
      className={`${baseStyles} ${styles} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;