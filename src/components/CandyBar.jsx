import { useTicketStore } from '../store/useTicketStore';
import { Plus, Minus, Utensils } from 'lucide-react';

const SNACKS = [
  { id: 's1', name: "Combo XL", detail: "Palomitas Jumbo + 2 Refrescos", price: 250, img: "https://images.unsplash.com/photo-1572177191856-3cde618dee1f?q=80&w=200" },
  { id: 's2', name: "Nachos Deluxe", detail: "Queso extra + Jalapeños", price: 120, img: "https://images.unsplash.com/photo-1510333300281-19340e427d2c?q=80&w=200" },
  { id: 's3', name: "Hot Dog Supremo", detail: "Salchicha de pavo 22cm", price: 95, img: "https://images.unsplash.com/photo-1541288097308-7b8e3f58c4c6?q=80&w=200" },
  { id: 's4', name: "Refresco Grande", detail: "Sabor a elegir (1L)", price: 65, img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=200" }
];

export default function CandyBar() {
  const { addToCart, removeFromCart, cart } = useTicketStore();

  const getQty = (id) => cart.find(i => i.id === id)?.quantity || 0;

  return (
    <section className="py-16 max-w-7xl mx-auto px-4">
      <h3 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
        <Utensils className="text-purple-600" />
        Dulcería
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SNACKS.map(snack => (
          <div key={snack.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col gap-4">
            <img src={snack.img} alt={snack.name} className="w-full h-40 object-cover rounded-xl" />
            <div>
              <h4 className="text-white font-bold">{snack.name}</h4>
              <p className="text-slate-400 text-xs mb-2">{snack.detail}</p>
              <p className="text-purple-400 font-bold">${snack.price}</p>
            </div>
            
            <div className="mt-auto flex items-center justify-between bg-slate-800 p-2 rounded-lg">
              <button 
                onClick={() => removeFromCart(snack.id)}
                className="w-8 h-8 flex items-center justify-center bg-slate-700 rounded-md hover:bg-slate-600 text-white"
              >
                <Minus size={16} />
              </button>
              <span className="text-white font-bold">{getQty(snack.id)}</span>
              <button 
                onClick={() => addToCart(snack)}
                className="w-8 h-8 flex items-center justify-center bg-purple-600 rounded-md hover:bg-purple-500 text-white"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}