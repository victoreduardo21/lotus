import React from 'react';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black py-10 border-t border-gray-900 text-xs md:text-sm">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left: Brand & Legal */}
        <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
            {/* Logo Image */}
            <img 
              src="https://lh3.googleusercontent.com/d/1KxqNCTyqWUVFwXNjmstdzeRa74ukr4QI" 
              alt="Lotus Logo" 
              className="w-28 md:w-36 h-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
            
            <div className="flex flex-col gap-1">
              <p className="text-gray-500 max-w-xs">
                  © Grupo Assessoria de Performance Lotus, todos os direitos reservados
              </p>
              <p className="text-gray-600 text-[10px]">
                  CNPJ: 01.453.816/0001-59 • Termos de Uso • Políticas de Privacidade
              </p>
            </div>
        </div>

        {/* Center: Creator Credit */}
        <div className="text-gray-600 text-[10px] flex items-center gap-1 font-medium">
            Desenvolvido pela GTS - Global Tech Software
        </div>

        {/* Right: Social Links */}
        <div className="flex items-center gap-4">
            <span className="text-gray-400">Siga a Lotus</span>
            <a 
              href="https://www.instagram.com/lotus.perform/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors"
            >
                <Instagram size={14} />
            </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;