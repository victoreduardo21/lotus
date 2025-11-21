import React from 'react';
import { Star, Flower } from 'lucide-react';
import { TestimonialItem } from '../types';
import Button from './Button';

const testimonials: TestimonialItem[] = [
  {
    stars: 5,
    text: "\"A Lótus transformou nosso tráfego. Em poucas semanas já víamos aumento consistente de leads qualificados.\"",
    author: "Marina Duarte",
    location: "São Paulo"
  },
  {
    stars: 5,
    text: "\"Nosso faturamento cresceu graças às estratégias da Lótus. Entregam performance de verdade.\"",
    author: "Rafael Torres",
    location: "Rio de Janeiro"
  },
  {
    stars: 5,
    text: "\"A Lótus otimizou nossas campanhas e reduziu o custo por conversão pela metade. Resultado rápido e eficaz.\"",
    author: "Bianca Nogueira",
    location: "Sorocaba"
  },
  {
    stars: 5,
    text: "\"Equipe extremamente técnica. Depois que a Lótus assumiu, nossa performance subiu e a escala ficou estável.\"",
    author: "Lucas Menezes",
    location: "Maranhão"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-20 w-full relative bg-[#050507]">
       
       {/* Top White Shine */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[100px] bg-white/5 blur-[60px] md:blur-[80px] -z-10 pointer-events-none"></div>

       {/* Subtle Gold Background Gradient */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gold-500/10 blur-[80px] md:blur-[120px] rounded-full -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Resultados de quem já está aplicando o método.
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto px-2">
            Veja resultados reais de quem já aplicou o método e comprovou sua eficácia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-[#0b0d15] border border-gray-800/50 p-6 md:p-8 rounded-xl hover:border-gold-500/60 transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-[0_0_20px_rgba(245,158,11,0.1)] group">
              <div className="flex gap-1 mb-4 md:mb-6">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold-500 text-gold-500" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 md:mb-8 text-sm md:text-base leading-relaxed font-light">
                {t.text}
              </p>
              <div className="flex items-center gap-4 border-t border-gray-800/50 pt-4 md:pt-6">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 border border-gold-500/20 group-hover:border-gold-500/50 transition-colors shrink-0">
                  <Flower size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">{t.author}</h4>
                  <span className="text-gray-500 text-xs block">{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button text="AGENDAR CONSULTORIA" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;