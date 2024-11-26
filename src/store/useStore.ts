import { create } from "zustand";

export const useStore = create((set) => ({
  cart: {},
  clearCart: () => set({ bears: {} }),
}));
