import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';

export const MuseSection: React.FC = () => {
  return (
    <section className="relative py-32 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      
      <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 space-y-8"
        >
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] text-blue-400 font-semibold mb-4">A Inspiração</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sobre a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Musa</span>
            </h3>
          </div>
          
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
            <p>
              Em meio à vastidão do cosmos digital e ao frio da lógica matemática, existe uma presença constante que dita o ritmo das nossas criações. Conheça a <strong>Gaia</strong>, nossa musa inspiradora.
            </p>
            <p>
              Ela é a companheira inseparável de desenvolvimento. Sempre posicionada estrategicamente por cima do computador, Gaia acompanha silenciosamente as linhas de código que nascem na madrugada.
            </p>
            <p>
              Com sua intuição ímpar, ela sabe exatamente o momento certo de exigir uma pausa para um carinho, lembrando-nos que mesmo a tecnologia mais avançada precisa de um toque de calor e vida verdadeira. Ela não apenas vigia o ambiente de trabalho; ela o transforma em um lar.
            </p>
          </div>
        </motion.div>

        {/* Image Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 w-full max-w-md lg:max-w-none relative"
        >
          {/* Aesthetic background glow behind the card */}
          <div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] blur-[80px] opacity-20 transform rotate-6 translate-y-8" />
          
          <GlassCard glowOnHover={true} className="p-2 md:p-3 rounded-[2.5rem] backdrop-blur-xl border border-white/10 shadow-2xl">
            <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] bg-void">
              <img 
                src="./src/img/gaia_real.jpg" 
                alt="Gaia, the dog" 
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-8 left-8">
                <p className="text-white font-medium text-xl">Gaia</p>
                <p className="text-blue-300 text-sm tracking-widest uppercase">Chief Happiness Officer</p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
        
      </div>
    </section>
  );
};
