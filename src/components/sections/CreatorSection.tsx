import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';

export const CreatorSection: React.FC = () => {
  return (
    <section className="relative py-32 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
        
        {/* Image Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 w-full max-w-md lg:max-w-none relative order-2 lg:order-1"
        >
          {/* Aesthetic background glow behind the card */}
          <div className="absolute inset-0 bg-gray-500 rounded-[2.5rem] blur-[80px] opacity-10 transform -rotate-3 translate-y-4" />
          
          <GlassCard glowOnHover={true} className="p-2 md:p-3 rounded-[2.5rem] backdrop-blur-xl border border-white/10 shadow-2xl">
            <div className="relative overflow-hidden rounded-[2rem] aspect-square bg-void">
              <img 
                src="./src/img/francisco.jpeg" 
                alt="Francisco, the creator" 
                className="object-cover w-full h-full grayscale hover:grayscale-0 transform hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-[#05050A]/20 to-transparent opacity-90" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-[2px] bg-blue-500" />
                  <p className="text-blue-300 text-sm tracking-[0.2em] uppercase font-semibold">O Criador</p>
                </div>
                <p className="text-white font-bold text-3xl">Francisco</p>
                <p className="text-gray-400 text-sm mt-1">Engenheiro de Software & Arquiteto de Soluções</p>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="flex-1 space-y-8 order-1 lg:order-2"
        >
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] text-gray-500 font-semibold mb-4">A Mente por Trás do Código</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Muito além da <span className="text-gradient">Sintaxe</span>
            </h3>
          </div>
          
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
            <p>
              Acredito que a tecnologia perde o sentido quando não está a serviço das pessoas. Como desenvolvedor, minha missão vai muito além de escrever códigos limpos e arquiteturas escaláveis; procuro solucionar dores reais.
            </p>
            <p>
              Eu projeto sistemas que <strong>entregam valor genuíno à sociedade</strong>. Cada componente, cada linha de código, é desenhada pensando em quem vai utilizar a ferramenta do outro lado da tela.
            </p>
            <p>
              Combinando tecnologias de ponta com um design focado no usuário, busco diminuir a distância entre a complexidade digital e a usabilidade humana, criando plataformas que capacitam e transformam realidades.
            </p>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};
