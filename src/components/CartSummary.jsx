import { useTicketStore } from '../store/useTicketStore';
import { Ticket, ShoppingBag, CreditCard, Trash2 } from 'lucide-react';

export default function CartSummary() {
  const { selectedMovie, selectedSeats, cart, clearBooking } = useTicketStore();

  const ticketPrice = selectedMovie ? selectedMovie.price * selectedSeats.length : 0;
  const snacksPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const total = ticketPrice + snacksPrice;

  if (!selectedMovie && cart.length === 0) return null;

  return (
    <div className="fixed right-6 bottom-6 w-96 bg-slate-900 border border-purple-500/30 rounded-3xl shadow-2xl shadow-purple-500/10 z-[60] overflow-hidden">
      <div className="p-6 border-b border-white/5 bg-gradient-to-r from-purple-900/20 to-transparent flex justify-between items-center">
        <div>
          <h4 className="text-white font-bold text-lg">Resumen de Compra</h4>
          <p className="text-slate-400 text-xs">Finaliza tu reservación</p>
        </div>
        <button onClick={clearBooking} className="text-slate-500 hover:text-red-400 transition-colors">
          <Trash2 size={20} />
        </button>
      </div>

      <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
        {selectedMovie && (
          <div className="flex gap-4">
            <div className="w-12 h-16 bg-slate-800 rounded overflow-hidden flex-shrink-0">
              <img src={selectedMovie.poster} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h5 className="text-white text-sm font-bold">{selectedMovie.title}</h5>
              <div className="flex items-center gap-2 text-slate-400 text-xs mt-1">
                <Ticket size={12} className="text-purple-500" />
                <span>{selectedSeats.length} boletos ({selectedSeats.join(', ')})</span>
              </div>
              <p className="text-purple-400 text-sm font-bold mt-1">${ticketPrice}</p>
            </div>
          </div>
        )}

        {cart.length > 0 && (
          <div className="space-y-3">
            <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">Dulcería</p>
            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-slate-300 text-sm">{item.name} x{item.quantity}</span>
                </div>
                <span className="text-slate-300 text-sm font-semibold">${item.price * item.quantity}</span>
              </div>
            ))}
          </div>
        )}

        <div className="pt-4 border-t border-white/5">
          <div className="flex justify-between items-end">
            <span className="text-slate-400 text-sm">Gran Total</span>
            <span className="text-3xl font-black text-white italic">${total}</span>
          </div>
        </div>
      </div>

      <div className="p-6 pt-0">
        <button className="w-full bg-purple-600 hover:bg-purple-500 text-white py-4 rounded-2xl font-black flex items-center justify-center gap-3 transition-all hover:scale-[1.02] shadow-xl shadow-purple-600/20 active:scale-95">
          <CreditCard size={20} /> PAGAR AHORA
        </button>
      </div>
    </div>
  );
}