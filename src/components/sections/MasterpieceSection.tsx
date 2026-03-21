import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { ShieldCheck, WifiOff, HeartHandshake, TrendingUp, Smartphone, Database, Globe, Cpu, CheckCircle } from 'lucide-react';

import coverImg from '../../assets/negócio de bolso - logo (Capa para Facebook).jpg';

export const MasterpieceSection: React.FC = () => {
  const differentials = [
    { icon: <Smartphone className="text-blue-400 w-6 h-6" />, title: "Inclusão Digital Real", desc: "Ultra leve. Funciona perfeitamente desde o Android 6." },
    { icon: <WifiOff className="text-purple-400 w-6 h-6" />, title: "Offline-First", desc: "Venda na rua ou na feira, mesmo sem internet. Sincronização inteligente." },
    { icon: <HeartHandshake className="text-green-400 w-6 h-6" />, title: "Gratuito de Verdade", desc: "O plano básico é a nossa contribuição para novos negócios." },
    { icon: <TrendingUp className="text-orange-400 w-6 h-6" />, title: "Escalabilidade Premium", desc: "Backup em nuvem, dashboards e relatórios por um preço acessível." }
  ];

  const stack = [
    { icon: <Smartphone className="w-5 h-5" />, label: "App", tech: "Kotlin, Jetpack Compose, Room, WorkManager" },
    { icon: <Database className="w-5 h-5" />, label: "Backend", tech: "Java, Spring Boot" },
    { icon: <Globe className="w-5 h-5" />, label: "Web", tech: "React, TypeScript, Zustand" },
    { icon: <ShieldCheck className="w-5 h-5" />, label: "Infra", tech: "GitHub Pages, Vercel (latência zero)" },
    { icon: <Cpu className="w-5 h-5" />, label: "IA", tech: "Arquitetura complexa ágil com suporte de IA" },
  ];

  const features = [
    "Controle de Fiados e Estoque",
    "Recibos Profissionais via WhatsApp",
    "CRM e Fidelidade",
    "Dashboard de Inteligência com Mapa de Calor"
  ];

  return (
    <section className="relative py-32 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background glow for the section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900 rounded-full blur-[150px] opacity-10 pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-blue-400 font-semibold mb-8">A Obra-Prima</h2>
          <div className="relative inline-block rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.3)] group">
            <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <img 
              src={coverImg} 
              alt="Capa Negócio de Bolso" 
              className="w-full max-w-2xl mx-auto transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </motion.div>
      </div>

      {/* Manifesto */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white mb-6">O Propósito</h3>
          <div className="space-y-4 text-gray-300 font-light text-lg leading-relaxed">
            <p>
              A ideia nasceu em 2017, nos meus primeiros dias da faculdade de Sistemas de Informação. O desafio era criar algo que entregasse valor real à sociedade.
            </p>
            <p>
              Olhando para dentro de casa, vi meus pais, profissionais liberais dedicados, gerindo tudo na memória e no papel. Faltava uma ferramenta que falasse a língua deles.
            </p>
            <p>
              Hoje, tiro esse projeto do papel para apoiar quem move a economia do nosso país: <strong className="text-white">o vendedor ambulante, a manicure, o autônomo</strong>. Quem não tem tempo nem dinheiro para sistemas complexos.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {differentials.map((item, idx) => (
            <GlassCard key={idx} className="p-6 border-white/5 bg-white/5">
              <div className="mb-4">{item.icon}</div>
              <h4 className="text-white font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </GlassCard>
          ))}
        </motion.div>
      </div>

      {/* Technical & Features Grid */}
      <div className="grid lg:grid-cols-12 gap-8 relative z-10">
        
        {/* Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <GlassCard className="h-full border border-blue-500/20 bg-gradient-to-br from-blue-900/10 to-transparent">
            <h3 className="text-2xl font-bold text-white mb-8">Stack Tecnológica</h3>
            <div className="space-y-6">
              {stack.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{item.label}</h4>
                    <p className="text-gray-400 text-sm mt-1">{item.tech}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <GlassCard className="h-full border border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-transparent">
            <h3 className="text-2xl font-bold text-white mb-8">Destaques</h3>
            <div className="space-y-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                  <CheckCircle className="text-purple-400 w-5 h-5 shrink-0" />
                  <span className="text-gray-200 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

      </div>
    </section>
  );
};
