// stores/useLoadingStore.ts
import { create } from 'zustand';

export const useLoadingStore = create<{
  isLoading: boolean;
  loadingCount: number;
  show: () => void;
  hide: () => void;
  reset: () => void;
}>((set) => ({
  isLoading: false,
  loadingCount: 0,
  
  show: () => set((state) => ({
    loadingCount: state.loadingCount + 1,
    isLoading: true,
  })),
  
  hide: () => set((state) => {
    const newCount = Math.max(0, state.loadingCount - 1);
    return {
      loadingCount: newCount,
      isLoading: newCount > 0,
    };
  }),
  
  // Función de emergencia para resetear todo
  reset: () => set({
    loadingCount: 0,
    isLoading: false,
  }),
}));