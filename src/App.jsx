import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import MovieGrid from './components/MovieGrid';
import SeatSelector from './components/SeatSelector';
import CandyBar from './components/CandyBar';
import CartSummary from './components/CartSummary';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-purple-500/30">
      <Header />
      <main className="pt-20">
        <HeroCarousel />
        <MovieGrid />
        <SeatSelector />
        <CandyBar />
      </main>
      <CartSummary />
      
      <footer className="py-12 border-t border-white/5 text-center text-slate-600 text-sm">
        <p>&copy; 2024 CineMax Deluxe. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;