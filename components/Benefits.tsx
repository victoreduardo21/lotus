import React from 'react';
import { BarChart3, Key, FileText, TrendingUp } from 'lucide-react';
import { BenefitItem } from '../types';
import Button from './Button';

const items: BenefitItem[] = [
  {
    icon: BarChart3,
    description: "Diagnóstico do momento atual da sua agência ou eugência, da carteira de clientes e dos serviços.",
    isHighlight: false
  },
  {
    icon: Key,
    description: "As chaves que precisam ser viradas para uma estrutura que entrega valor e resultado aos clientes.",
    isHighlight: false
  },
  {
    icon: FileText,
    description: "O plano prático para você crescer o negócio do jeito e avançar para o próximo nível de faturamento.",
    isHighlight: true
  },
  {
    icon: TrendingUp,
    description: "O modelo de negócios validado para você sair do caos e faturar 2 a 4 vezes mais todos os meses.",
    isHighlight: false
  }
];

const Benefits: React.FC = () => {
  return (
    <section className="py-16 md:py-20 w-full bg-[#050507] relative">
      
      {/* White Spotlight Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[200px] bg-white/10 blur-[80px] md:blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto relative">
           {/* Glow behind title */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[400px] h-[150px] bg-gold-500/20 blur-[60px] -z-10"></div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">
            O que você recebe no seu <span className="text-gold-500">diagnóstico gratuito</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto relative z-10 px-2">
            Descubra exatamente quais benefícios você terá ao participar do nosso diagnóstico gratuito e como cada etapa foi pensada para ajudar você a alcançar resultados reais de forma rápida e estratégica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {items.map((item, index) => (
            <div 
              key={index} 
              className={`
                p-6 md:p-8 rounded-xl flex flex-col gap-4 md:gap-6 transition-all duration-300 group relative overflow-hidden
                ${item.isHighlight 
                  ? 'bg-gold-500 text-black shadow-[0_0_50px_rgba(34,197,94,0.4)] transform md:-translate-y-4' 
                  : 'bg-[#0b0d15] border border-gold-500/40 hover:border-gold-500 text-gray-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)]'
                }
              `}
            >
              {/* Subtle white sheen on cards */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className={`p-3 w-fit rounded-lg relative z-10 ${item.isHighlight ? 'bg-black/10 text-black' : 'bg-[#161825] border border-gold-500/30 text-white group-hover:text-gold-500 transition-colors'}`}>
                <item.icon size={24} strokeWidth={1.5} />
              </div>
              <p className={`text-sm leading-relaxed font-medium relative z-10 ${item.isHighlight ? 'text-black' : 'text-gray-400 group-hover:text-gray-200'}`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button text="SEU DIAGNÓSTICO GRATUITO" />
        </div>

      </div>
    </section>
  );
};

export default Benefits;