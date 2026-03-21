
import { ParticlesBackground } from './components/ui/ParticlesBackground';
import { HeroSection } from './components/sections/HeroSection';
import { MuseSection } from './components/sections/MuseSection';
import { CreatorSection } from './components/sections/CreatorSection';
import { MasterpieceSection } from './components/sections/MasterpieceSection';
import { CTASection } from './components/sections/CTASection';

function App() {
  return (
    <div className="min-h-screen bg-void text-platinum font-sans bg-[#05050A] selection:bg-blue-500/30 selection:text-blue-200">
      <ParticlesBackground />
      
      <main className="relative z-10 w-full overflow-hidden">
        <HeroSection />
        <MuseSection />
        <CreatorSection />
        <MasterpieceSection />
        <CTASection />
      </main>

      <footer className="relative z-10 py-8 border-t border-white/5 bg-[#0a0f1a]/80 backdrop-blur-md text-center">
        <p className="text-gray-500 text-sm tracking-wider">
          &copy; {new Date().getFullYear()} Gaia Works. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}

export default App;
