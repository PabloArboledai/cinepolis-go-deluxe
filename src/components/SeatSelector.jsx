import { useTicketStore } from '../store/useTicketStore';

const ROWS = ['A', 'B', 'C', 'D', 'E', 'F'];
const COLS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const OCCUPIED = ['A3', 'A4', 'C5', 'C6', 'E1', 'E2', 'F9', 'F10'];

export default function SeatSelector() {
  const { selectedMovie, selectedShowtime, selectedSeats, toggleSeat } = useTicketStore();

  if (!selectedMovie || !selectedShowtime) return null;

  return (
    <section className="py-16 bg-slate-950/50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-2">Selecciona tus Asientos</h3>
          <p className="text-slate-400">Película: <span className="text-purple-400 font-semibold">{selectedMovie.title}</span> • Horario: <span className="text-purple-400 font-semibold">{selectedShowtime}</span></p>
        </div>

        {/* Pantalla */}
        <div className="w-full h-2 bg-gradient-to-b from-purple-500 to-transparent rounded-full mb-16 shadow-[0_-10px_40px_rgba(168,85,247,0.4)]"></div>
        <p className="text-slate-600 text-center text-xs uppercase tracking-[0.5em] mb-12 italic">PANTALLA</p>

        <div className="flex flex-col gap-3 items-center">
          {ROWS.map(row => (
            <div key={row} className="flex gap-3">
              <span className="w-6 text-slate-500 text-sm flex items-center">{row}</span>
              {COLS.map(col => {
                const id = `${row}${col}`;
                const isOccupied = OCCUPIED.includes(id);
                const isSelected = selectedSeats.includes(id);
                
                return (
                  <button
                    key={id}
                    disabled={isOccupied}
                    onClick={() => toggleSeat(id)}
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-t-xl transition-all duration-200 border-b-4 ${isOccupied ? 'bg-slate-800 border-slate-900 cursor-not-allowed' : isSelected ? 'bg-purple-600 border-purple-800 scale-110 shadow-lg shadow-purple-500/20' : 'bg-green-600/20 border-green-700/30 hover:bg-green-600/40 hover:scale-105'}`}
                  />
                );
              })}
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-8 mt-12 text-sm">
          <div className="flex items-center gap-2"><div className="w-4 h-4 bg-green-600/20 border-b-2 border-green-700/30 rounded"></div> <span className="text-slate-400">Disponible</span></div>
          <div className="flex items-center gap-2"><div className="w-4 h-4 bg-slate-800 border-b-2 border-slate-900 rounded"></div> <span className="text-slate-400">Ocupado</span></div>
          <div className="flex items-center gap-2"><div className="w-4 h-4 bg-purple-600 border-b-2 border-purple-800 rounded"></div> <span className="text-slate-400">Seleccionado</span></div>
        </div>
      </div>
    </section>
  );
}