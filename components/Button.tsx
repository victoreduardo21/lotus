import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'outline';
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className = '', variant = 'primary' }) => {
  const baseStyles = "uppercase text-xs tracking-[0.15em] font-bold py-4 px-10 transition-all duration-300 border select-none";
  
  // Primary: Orange/Gold background, Black text -> Hover: Black background, Orange/Gold text
  const primaryStyles = "bg-gold-500 border-gold-500 text-black hover:bg-black hover:text-gold-500 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]";
  
  const outlineStyles = "bg-transparent border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black";

  const styles = variant === 'primary' ? primaryStyles : outlineStyles;

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Updated contact number with pre-filled message
      const phoneNumber = '5547991005930';
      const message = encodeURIComponent('Olá, gostaria de saber mais sobre os serviços da Lotus.');
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
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