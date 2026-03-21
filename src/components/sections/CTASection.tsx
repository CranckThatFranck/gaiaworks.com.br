import React from 'react';
import { motion } from 'framer-motion';
import { GlowingButton } from '../ui/GlowingButton';
import { Rocket } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="relative py-32 md:py-48 px-4 overflow-hidden">
      
      {/* Deep Space Background Effects */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-blue-600 rounded-full blur-[120px] opacity-10 animate-pulse" />
        <div className="absolute w-[800px] h-[400px] bg-purple-600 rounded-full blur-[150px] opacity-10 transform rotate-45" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm tracking-widest uppercase mb-8 font-semibold backdrop-blur-md">
            <Rocket className="w-4 h-4" />
            <span>Lançamento Oficial: 1º Semestre de 2026</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Pronto para transformar <br className="hidden md:block"/> seu negócio?
          </h2>
          
          <p className="text-xl text-gray-400 font-light mb-12 max-w-2xl mx-auto">
            Junte-se a nós na jornada de empoderamento do trabalho autônomo através da tecnologia acessível.
          </p>

          <GlowingButton href="https://negociodebolso.com" target="_blank" rel="noopener noreferrer">
            <span className="text-lg px-4">Conheça o Negócio de Bolso</span>
          </GlowingButton>
        </motion.div>
      </div>
      
    </section>
  );
};
