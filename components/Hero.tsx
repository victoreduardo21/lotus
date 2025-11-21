import React from 'react';
import Button from './Button';


const Hero: React.FC = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 pt-10 pb-0 md:pt-24 md:pb-32 flex flex-col md:flex-row items-center">
      
      {/* Global Top Light */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] h-[500px] bg-white/10 blur-[80px] md:blur-[100px] -z-10 pointer-events-none" />
      
      {/* "Rajada de Luz Branca" - Intense White Light Burst Illuminating the Image */}
      <div className="absolute top-[-200px] right-[-50px] md:right-[5%] w-[400px] md:w-[600px] h-[800px] md:h-[1000px] bg-gradient-to-b from-white/40 via-white/10 to-transparent transform -rotate-[15deg] blur-[70px] -z-0 pointer-events-none mix-blend-screen" />
      
      {/* Ambient Gold Glow (Left side) */}
      <div className="absolute top-[10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gold-500/20 rounded-full blur-[80px] md:blur-[100px] -z-10 pointer-events-none mix-blend-screen" />

      {/* Text Content */}
      <div className="w-full md:w-1/2 z-10 space-y-6 md:space-y-8 md:pr-10 relative text-center md:text-left mb-10 md:mb-0">
        <span className="text-gray-400 uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold block">
          Assessoria de Performance
        </span>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] md:leading-[1.1]">
          Sua Estética Avançada <span className="text-gold-500 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">Faturando 2 a 4 vezes mais</span> todos os meses <span className="text-white">com lucro e sem você na operação!</span>
        </h1>
        
        <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
          Descubra como modelar sua Estética de forma correta e gerar alta demanda, 
          estruturar seu time e crescer com lucro, segurança e escala.
        </p>

        <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 hidden sm:block">
          Chega de depender da sorte ou indicação, de cobrar barato, de ficar preso na operação 
          ou de não conseguir crescer seu negócio. Agende uma consultoria GRATUITA e vamos acelerar.
        </p>

        <div className="pt-4 md:pt-6">
          <Button text="AGENDAR CONSULTORIA" />
        </div>
      </div>

      {/* Image Content */}
      <div className="w-full md:w-1/2 relative flex justify-center md:justify-end px-0 h-[400px] md:h-[600px] items-end">
         
         {/* Image Container */}
         <div className="relative w-auto h-[90%] md:h-full z-10 flex justify-center">
            {/* Back Glow behind the person */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-gold-500/20 blur-[60px] rounded-full -z-10"></div>

            {/* The Person Image - Google Drive Direct Link */}
            <img 
              src="https://lh3.googleusercontent.com/d/1lBs7HIVzgQ4IXVHqfNTGTRwJ_LQfCGk2"
              alt="Juan Luca" 
              className="h-full w-auto object-cover drop-shadow-[0_0_30px_rgba(0,0,0,0.8)] relative z-10"
              style={{
                maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
              }}
            />
         </div>
         
         {/* Extra ambiance */}
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/3 bg-gradient-to-t from-[#050507] to-transparent z-20"></div>
      </div>
    </section>
  );
};

export default Hero;