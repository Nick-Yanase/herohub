import { create } from 'zustand';
import { Hero } from '@/types/Hero';

interface FavoriteStore {
  favorites: Hero[];
  addFavorite: (hero: Hero) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

export const useFavoriteStore = create<FavoriteStore>((set, get) => ({
  favorites: [],

  addFavorite: (hero) => {
    const current = get().favorites;
    if (current.find((h) => h.id === hero.id)) return;

    if (current.length >= 5) {
      alert('Você só pode favoritar até 5 personagens.');
      return;
    }

    set({ favorites: [...current, hero] });
  },

  removeFavorite: (id) => {
    set((state) => ({
      favorites: state.favorites.filter((h) => h.id !== String(id)),
    }));
  },

  isFavorite: (id) => {
    return get().favorites.some((h) => h.id === String(id));
  },
}));
