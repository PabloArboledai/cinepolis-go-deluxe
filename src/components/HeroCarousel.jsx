import { Play, Info, Calendar } from 'lucide-react';

const HeroCarousel = () => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop" 
          className="w-full h-full object-cover"
          alt="Featured Movie"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center gap-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-wider w-fit">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          Estreno Exclusivo
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black text-white max-w-2xl leading-[0.9] tracking-tighter">
          NIGHT <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-purple-800">WALKER</span>
        </h1>
        
        <p className="text-slate-300 max-w-xl text-lg leading-relaxed">
          En un futuro distópico, un detective debe encontrar la última chispa de humanidad 
          en una ciudad dominada por la inteligencia artificial. Una experiencia visual sin precedentes.
        </p>

        <div className="flex flex-wrap gap-4 mt-4">
          <button className="bg-white text-slate-950 px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-purple-500 hover:text-white transition-all transform hover:scale-105 active:scale-95">
            <Play size={20} fill="currentColor" />
            Reservar Ahora
          </button>
          <button className="bg-white/10 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-white/20 transition-all">
            <Info size={20} />
            Más información
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;