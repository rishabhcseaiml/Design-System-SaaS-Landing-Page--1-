import heroImage from '../assets/WhatsApp Image 2026-03-15 at 9.09.22 PM (1).jpeg';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <img 
        src={heroImage} 
        alt="Mint Water - Pure Water Pure Vibe" 
        className="absolute inset-0 w-full h-full object-cover opacity-60 md:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="text-5xl md:text-8xl mb-6 tracking-tighter font-bold">
          MINT WATER
        </h1>
        <p className="text-2xl md:text-4xl mb-6 tracking-wide text-cyan-400 font-light">
          PURE WATER · PURE VIBE
        </p>
        <p className="text-lg md:text-xl max-w-2xl mb-12 text-white/80 leading-relaxed">
          Premium Packaged Drinking Water for Retailers, Wholesalers, and Custom Branding. 
          Experience the ultimate hydration with our crystal-clear purity.
        </p>
        
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
          <button 
            onClick={scrollToAbout}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl font-semibold"
          >
            Discover More
          </button>
          <a 
            href="#contact"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 font-semibold"
          >
            Get In Touch
          </a>
        </div>

        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 animate-bounce transition-opacity duration-300 hover:opacity-100 opacity-70"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}
