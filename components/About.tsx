
import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-24 w-full bg-[#050507] relative overflow-hidden">
       {/* Side Glow - Stronger */}
       <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-gold-500/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-12 lg:gap-20 items-center md:items-start relative z-10">
        
        {/* Profile Card */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <div className="w-full max-w-[320px] bg-[#0b0d15] p-8 rounded-2xl border border-gold-500/50 flex flex-col items-center relative overflow-hidden shadow-[0_0_30px_rgba(245,158,11,0.15)]">
             {/* Glow effect behind image - Changed to Gold */}
             <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-gold-500/20 to-transparent opacity-100"></div>
            
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-[3px] border-gold-500 mb-6 z-10 shadow-[0_0_20px_rgba(245,158,11,0.4)]">
              {/* Profile Image - Google Drive Direct Link */}
              <img 
                src="https://lh3.googleusercontent.com/d/10u51BIIzN8h6Vl4eRnDiFDt3CYh7_9pT"
                alt="Juan Luca" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-1 relative z-10">Juan Luca</h3>
            <span className="text-gold-500 text-xs uppercase tracking-widest mb-6 font-bold glow-text relative z-10">Founder / Diretor</span>
            
            <div className="flex gap-3 w-full justify-center relative z-10">
              <a 
                href="https://www.instagram.com/lotus.perform/" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Instagram da Empresa"
                className="text-gray-400 hover:text-gold-500 hover:bg-gold-500/10 transition-all bg-[#161825] p-3 rounded-lg border border-gray-800 hover:border-gold-500/50 shadow-lg"
              >
                <Instagram size={18} />
              </a>

              <a 
                href="https://wa.me/5547991005930?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Lotus." 
                target="_blank" 
                rel="noopener noreferrer"
                title="WhatsApp"
                className="text-gray-400 hover:text-green-500 hover:bg-green-500/10 transition-all bg-[#161825] p-3 rounded-lg border border-gray-800 hover:border-green-500/50 shadow-lg"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-2/3 space-y-6 text-gray-400 text-sm md:text-base leading-loose">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            A Jornada da Lotus rumo à <span className="text-gold-500 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]">Alta Performance Digital</span>
          </h2>
          
          <p>
            Como um apaixonado pela ciência, línguas, filosofia, mente humana e cultura estóica, guio meus negócios pessoais com disciplina e previsibilidade.
          </p>
          
          <p>
            Desde 2017 no digital, minha operação hoje é rodeada de pessoas do ecossistema de marketing, desenvolvimento de empresas e comercial, além da parte jurídica e financeira.
          </p>

          <p>
            Hoje além de tudo isso, trabalhamos com uma HUB IA (Generativa) parceira que é de tirar o fôlego e alavancar o negócio de qualquer pessoa. Muito orgulho do meu esforço, conhecimento e do meu time!
          </p>

          <div className="bg-[#0b0d15] border border-gold-500/20 p-6 rounded-lg mt-6 shadow-[0_0_15px_rgba(245,158,11,0.05)]">
            <p className="text-gray-300 italic">
              Em 2025, a Lotus Company iniciou seu maior projeto: um programa premium de acompanhamento dedicado a ajudar Empresas para alcançarem faturamentos acima de 100 mil reais mensais.
            </p>
            <p className="font-bold text-white pt-4 text-right">
              — Essa é a Metodologia LOTUS.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
