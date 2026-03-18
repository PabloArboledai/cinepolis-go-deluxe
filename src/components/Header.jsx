import { Ticket, ShoppingCart, User, Search } from 'lucide-react';
import { useTicketStore } from '../store/useTicketStore';

const Header = () => {
  const cart = useTicketStore(state => state.cart);
  const selectedSeats = useTicketStore(state => state.selectedSeats);
  
  const totalItems = cart.length + (selectedSeats.length > 0 ? 1 : 0);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-2 rounded-lg">
            <Ticket className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            CINEMAX<span className="text-purple-500">DELUXE</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#" className="hover:text-white transition-colors">Cartelera</a>
          <a href="#" className="hover:text-white transition-colors">Promociones</a>
          <a href="#" className="hover:text-white transition-colors">Dulcería</a>
          <a href="#" className="hover:text-white transition-colors">Socio Deluxe</a>
        </nav>

        <div className="flex items-center gap-5">
          <button className="p-2 hover:bg-white/5 rounded-full transition-colors text-slate-400">
            <Search size={20} />
          </button>
          <button className="relative p-2 hover:bg-white/5 rounded-full transition-colors text-slate-400">
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-purple-600 text-[10px] font-bold text-white rounded-full flex items-center justify-center animate-pulse">
                {totalItems}
              </span>
            )}
          </button>
          <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 transition-all">
            <User size={18} />
            <span className="text-sm font-semibold">Ingresar</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;