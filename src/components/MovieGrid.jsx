import React from 'react';
import useTicketStore from '../store/useTicketStore';
import { Star, Clock, Calendar } from 'lucide-react';

const MOVIES = [
  {
    id: 1,
    title: "Dune: Part Two",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000&auto=format&fit=crop",
    rating: 4.9,
    duration: "2h 46m",
    genre: "Sci-Fi",
    date: "Ayer"
  },
  {
    id: 2,
    title: "Oppenheimer",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1000&auto=format&fit=crop",
    rating: 4.8,
    duration: "3h 00m",
    genre: "Drama",
    date: "Hoy"
  },
  {
    id: 3,
    title: "Spider-Man: Across the Spider-Verse",
    image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=1000&auto=format&fit=crop",
    rating: 4.9,
    duration: "2h 20m",
    genre: "Animation",
    date: "Mañana"
  },
  {
    id: 4,
    title: "The Batman",
    image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=1000&auto=format&fit=crop",
    rating: 4.7,
    duration: "2h 56m",
    genre: "Action",
    date: "Próximamente"
  }
];

const MovieGrid = () => {
  const { setSelectedMovie, selectedMovie } = useTicketStore();

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Cartelera Recomendada</h2>
          <p className="text-slate-400">Selecciona una película para ver funciones</p>
        </div>
        <button className="text-indigo-400 font-semibold hover:text-indigo-300 transition-colors">Ver todas &rarr;</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {MOVIES.map((movie) => (
          <div 
            key={movie.id}
            onClick={() => setSelectedMovie(movie)}
            className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] ${
              selectedMovie?.id === movie.id ? 'ring-2 ring-indigo-500 ring-offset-4 ring-offset-slate-950' : ''
            }`}
          >
            <div className="aspect-[2/3] overflow-hidden">
              <img 
                src={movie.image} 
                alt={movie.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-indigo-600/90 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded">PREMIUM</span>
                <div className="flex items-center gap-1 text-amber-400">
                  <Star size={12} fill="currentColor" />
                  <span className="text-xs font-bold">{movie.rating}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-indigo-300 transition-colors">
                {movie.title}
              </h3>
              <div className="flex items-center gap-4 text-slate-300 text-xs">
                <span className="flex items-center gap-1"><Clock size={12}/> {movie.duration}</span>
                <span className="flex items-center gap-1">{movie.genre}</span>
              </div>
            </div>
            
            {selectedMovie?.id === movie.id && (
              <div className="absolute top-4 right-4 bg-indigo-500 text-white rounded-full p-1 shadow-lg">
                <Ticket size={20} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieGrid;