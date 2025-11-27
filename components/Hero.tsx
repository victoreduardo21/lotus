import React from 'react';
import Button from './Button';


const Hero: React.FC = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 pt-10 pb-0 md:pt-24 md:pb-32 flex flex-col md:flex-row items-center">
      
      {/* Ambient Green Glow */}
      <div className="absolute top-[10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gold-500/25 rounded-full blur-[80px] md:blur-[100px] -z-10 pointer-events-none mix-blend-screen" />

      {/* Text Content */}
      <div className="w-full md:w-1/2 z-10 space-y-6 md:space-y-8 md:pr-10 relative text-center md:text-left mb-10 md:mb-0">
        <span className="text-gray-400 uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold block">
          Assessoria de Performance
        </span>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] md:leading-[1.1]">
          Sua Estética Avançada <span className="text-gold-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]">Faturando 2 a 4 vezes mais</span> todos os meses <span className="text-white">com lucro e sem você na operação!</span>
        </h1>
        
        <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
          Descubra como modelar sua Estética de forma correta e gerar alta demanda, 
          estruturar seu time e crescer com lucro, segurança e escala.
        </p>

        <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 hidden sm:block">
          Chega de depender da sorte ou indicação, de cobrar barato, de ficar preso na operação 
          ou de não conseguir crescer seu negócio. Agende seu diagnóstico GRATUITO e vamos acelerar.
        </p>

        {/* Button removed as requested */}
      </div>

      {/* Image Content */}
      <div className="w-full md:w-1/2 relative flex justify-center md:justify-end px-0 h-[450px] md:h-[600px] items-end">
         
         {/* Image Container */}
         <div className="relative w-full h-full z-10 flex justify-center items-end">
            {/* Back Glow behind the person */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-gold-500/20 blur-[60px] rounded-full -z-10"></div>

            {/* The Person Image - Google Drive Direct Media Link (lh3) */}
            <img 
              src="https://lh3.googleusercontent.com/d/1rCyjlMa7lvUlFjcs203XShUki3ivD7qU=s2000"
              loading="eager"
              alt="Juan Luca" 
              className="h-full w-auto object-contain object-bottom drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]"
              referrerPolicy="no-referrer"
              style={{
                maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)'
              }}
            />
         </div>
         
         {/* Extra ambiance */}
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/4 bg-gradient-to-t from-[#050507] to-transparent z-20"></div>
      </div>
    </section>
  );
};

export default Hero;