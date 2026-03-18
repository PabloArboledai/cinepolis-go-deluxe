import { create } from 'zustand';

export const useTicketStore = create((set) => ({
  selectedMovie: null,
  selectedDate: null,
  selectedTime: null,
  selectedSeats: [],
  cart: [],
  
  setSelectedMovie: (movie) => set({ selectedMovie: movie, selectedSeats: [], selectedDate: null, selectedTime: null }),
  setSelectedDate: (date) => set({ selectedDate: date }),
  setSelectedTime: (time) => set({ selectedTime: time }),
  
  toggleSeat: (seatId) => set((state) => ({
    selectedSeats: state.selectedSeats.includes(seatId)
      ? state.selectedSeats.filter(id => id !== seatId)
      : [...state.selectedSeats, seatId]
  })),
  
  addToCart: (item) => set((state) => ({
    cart: [...state.cart, { ...item, cartId: Math.random().toString(36).substr(2, 9) }]
  })),
  
  removeFromCart: (cartId) => set((state) => ({
    cart: state.cart.filter(item => item.cartId !== cartId)
  })),

  clearCart: () => set({ cart: [], selectedMovie: null, selectedSeats: [] })
}));