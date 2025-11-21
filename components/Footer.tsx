import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black py-10 border-t border-gray-900 text-xs md:text-sm">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left: Brand & Legal */}
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <div className="flex items-center gap-3 mb-1">
                {/* Logo Image - Google Drive Link - Increased size */}
                <img 
                  src="https://lh3.googleusercontent.com/d/1tBK3MiHaCLvCTL6LuI56pZKg_rv6QPvg" 
                  alt="Lotus" 
                  className="w-10 h-10 object-contain opacity-90" 
                />
                <h4 className="text-white font-bold text-xl">Lotus</h4>
            </div>
            <span className="text-gray-600 text-[10px] uppercase tracking-wider mb-2">Performance</span>
            <p className="text-gray-500 max-w-xs">
                © Grupo Assessoria de Performance Lotus, todos os direitos reservados
            </p>
            <p className="text-gray-600 text-[10px]">
                CNPJ: 01.453.816/0001-59 • Termos de Uso • Políticas de Privacidade
            </p>
        </div>

        {/* Center: Creator Credit */}
        <div className="text-gray-600 text-[10px] flex items-center gap-1 font-medium">
            Desenvolvido pela GTS - Global Tech Software
        </div>

        {/* Right: Social Links */}
        <div className="flex items-center gap-4">
            <span className="text-gray-400">Siga a Lotus</span>
            <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors">
                <Facebook size={14} />
            </a>
            <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors">
                <Twitter size={14} />
            </a>
            <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors">
                <Instagram size={14} />
            </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;