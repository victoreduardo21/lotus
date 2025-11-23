import React, { useState } from 'react';
import Button from './Button';
import { Play } from 'lucide-react';

// ID exato do vídeo fornecido
const VIDEO_ID = "1uIQOVKNItuk-0FR2_MOY06IJHiqhLhFu";

const Testimonials: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16 md:py-20 w-full relative bg-[#050507]">
       
       {/* Top Shine */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[100px] bg-white/5 blur-[60px] md:blur-[80px] -z-10 pointer-events-none"></div>

       {/* Subtle Gold Background Gradient */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gold-500/10 blur-[80px] md:blur-[120px] rounded-full -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Resultados de quem já está aplicando o método
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto px-2">
            Veja na prática os resultados reais de quem já aplicou o método e comprovou sua eficácia.
          </p>
        </div>

        {/* Video Container */}
        <div className="flex flex-col items-center justify-center mb-12 w-full">
            
            <div className="relative w-full max-w-[340px] aspect-[9/16] bg-black rounded-2xl overflow-hidden border border-gold-500/30 shadow-[0_0_40px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(245,158,11,0.15)] transition-all duration-300 group">
                
                {!isPlaying ? (
                  /* Click-to-Play Cover */
                  <button 
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-[#161825] cursor-pointer z-20 hover:bg-[#1c1f2e] transition-colors"
                  >
                    <div className="w-20 h-20 rounded-full bg-gold-500 flex items-center justify-center pl-1 shadow-[0_0_30px_rgba(245,158,11,0.4)] group-hover:scale-110 transition-transform duration-300">
                      <Play size={32} className="text-black fill-black" />
                    </div>
                    <p className="mt-6 text-gold-500 font-medium uppercase tracking-widest text-xs">Clique para assistir</p>
                    <p className="mt-2 text-gray-500 text-[10px]">Carregamento seguro</p>
                  </button>
                ) : (
                  /* Iframe loads only after click */
                  <iframe 
                      src={`https://drive.google.com/file/d/${VIDEO_ID}/preview`}
                      className="absolute top-0 left-0 w-full h-full z-10"
                      style={{ border: 'none' }}
                      allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                      allowFullScreen
                      title="Depoimento Cliente"
                  ></iframe>
                )}

            </div>
        </div>

        <div className="flex justify-center">
          <Button text="AGENDAR CONSULTORIA" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;