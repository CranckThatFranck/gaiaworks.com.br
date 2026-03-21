import React from 'react';
import { motion } from 'framer-motion';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-8">
      {/* Subtle overlay gradient to ensure text contrast over particles */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#05050A] pointer-events-none z-10" />
      
      <div className="relative z-20 flex flex-col items-center max-w-5xl mx-auto mt-20 md:mt-0 text-center">
        
        {/* Main Logo & Title */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="w-56 h-56 md:w-72 md:h-72 mb-8 relative group">
            <div className="absolute inset-0 bg-blue-600 rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
            <img 
              src="./src/img/gaiaworks.png" 
              alt="Gaia Works Logo" 
              className="w-full h-full object-contain drop-shadow-2xl relative z-10 animate-[pulse_4s_ease-in-out_infinite]"
            />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6">
            <span className="text-gradient">Gaia Works</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-lg md:text-2xl text-gray-300 leading-relaxed font-light">
            A intersecção majestosa entre <span className="font-medium text-white">código</span>, <span className="font-medium text-white">propósito</span> e <span className="text-blue-400 font-medium">inteligência artificial</span>.
          </p>
          <p className="mt-4 text-gray-400">
            Forjando o futuro digital com elegância, precisão e uma pitada de poeira estelar.
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-2">Desça para explorar</span>
        <div className="w-px h-16 bg-gradient-to-b from-blue-500/50 to-transparent" />
      </motion.div>
    </section>
  );
};
